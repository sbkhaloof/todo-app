import React,{useContext} from 'react';
import { When } from 'react-if';

import { LoginContext } from '../context/loginContext';

export default function Auth(props) {

  const context= useContext(LoginContext);
  
 const isLoggedIn=context.loggedIn;
 const canDo=props.capability ? context.can(props.capability) : true;
 const okToRender = isLoggedIn && canDo;
 return (
  <When condition={okToRender}>
  {props.children}
</When>
 );

}

// this code from starter code class 33
/**
 Create an <Auth /> component with the following features:

 1. Given a capability prop of type string, conditionally render components based on the user stored in context.
2. Hide the entire interface until the user has logged in.
3. Implements the following RBAC rules:
- Logged In Users with ‘read’ permissions can see the summary/count.
- Logged In Users with ‘read’ permissions can see the list of To Do Items.
- Logged In Users with ‘update’ permissions can click the records to mark them as complete.
- Logged In Users with ‘create’ permissions can create new items.
- Logged In Users with ‘delete’ permissions can delete items.
 */
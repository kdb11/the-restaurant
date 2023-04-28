import AdminLogin from './AdminLogin';
import './Admin.css';
export const Admin = () => {

  return (<>
    <div className='adminContainer'>
      <img className='adminImg' src='https://images.unsplash.com/photo-1489528792647-46ec39027556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt='takeAway'></img>
      <AdminLogin />
    </div>   
  </>
  );
};
export default Admin;


import { useRouter } from 'next/router';
import { useAuthState } from '../hooks/useAuthState'

function PrivateRoute({ children }) {
    const router = useRouter();
    const {loggedIn,checkStatus} = useAuthState()

      if (checkStatus && !loggedIn) {
        return;
      }
  
      if (!loggedIn) {
        router.push('/login');
      }
    return children;
  }

export default PrivateRoute






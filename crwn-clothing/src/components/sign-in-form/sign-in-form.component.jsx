import { useState } from "react"
import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPES_CLASSES} from "../button/button.component";

import './sign-in-form.styles.scss';

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";


const defaultFormFields = {
  email:'',
  password: ''
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]:value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      

      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/invalid-login-credentials'){
        alert('email or password is incorrect')
      }
    }
  }
  
  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>


      <form onSubmit={handleSubmit}>
        <FormInput label="Email" required type="email" name='email' value={email} onChange={handleChange} />

        <FormInput label="Password" required type="password" name="password" value={password} onChange={handleChange} />

        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle} >GOOGLE SIGN IN</Button>
        </div>
        
      </form>
      
      
    </div>
  )
}


export default SignInForm;
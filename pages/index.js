import head from "next/head";
import styles from "../styles/home.module.css"
import  Alert from "react-bootstrap/Alert";

export default function Home(){
  return <div className={styles.container}>
          {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
  </div>
}
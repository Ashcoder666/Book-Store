import React,{useState,useEffect} from 'react'
import {commerce} from '../../../lib/commerce'
import {Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button,CssBaseline} from '@material-ui/core'
import useStyles from './styles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm' 
import {Link} from 'react-router-dom'

const steps =[ 'Shipping Address','Payment Details'];


const Checkout = ({cart,order,error,onCaptureCheckout}) => {
    const [activeStep,setActiveStep] =useState(0)
    const [checkoutToken,setCheckoutToken] = useState(null)
    const [shippingData,setShippingData] = useState({})
    const [orderData,setOrderData] = useState({})
    const classes = useStyles();
    useEffect(()=>{
      const generateToken = async()=>{
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
         console.log(token)
          setCheckoutToken(token)
        } catch (error) {
          
        }
      }

      generateToken()
    },[cart])

    const nextStep = ()=>{
      setActiveStep(prev => prev+1)
    }

    const getOrderData =(order)=>{
        setOrderData(order)
    }

    const backstep =()=>{
      setActiveStep(prev => prev-1)
    }

    const next = (data)=>{
      setShippingData(data);
      nextStep();
    }

    let Confirmation = () => (orderData ? (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase, {orderData.customer.firstname} {orderData.customer.lastname}!</Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">Order ref: {orderData.payment.stripe.payment_method_id}</Typography>
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    ));
  
   

    const Form = () => activeStep === 0
    ? <AddressForm  next={next} checkoutToken={checkoutToken}/>
    : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backstep={backstep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} getOrderData={getOrderData}/>


  return (
    <>
    <CssBaseline />
    <div className={classes.toolbar} />
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center">Checkout</Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
      </Paper>
    </main>
  </>
  )
}

export default Checkout

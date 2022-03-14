import React,{useState,useEffect} from 'react'
import {InputLabel,Select,MenuItem,Button,Grid,Typography} from '@material-ui/core'
import { FormProvider,useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'
import {commerce} from '../../lib/commerce'
import FormInput from './CustomTextField'
const AddressForm = ({checkoutToken,next}) => {
  const shippingCountry = "India";
  const [shippingSubdivisions,setShippingSubdivisions] = useState([])
  const [shippingSubdivision,setShippingSubdivision] = useState('')
  const methods = useForm();

const fetchStates= async(countryCode)=>{
    const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode)
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);

  }
useEffect(()=>{
  fetchStates('IN')
},[])


  return (
    <>
    <Typography variant="h6" gutterBottom>Shipping address</Typography>
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data)=> next({...data,shippingCountry,shippingSubdivision}))}>
        <Grid container spacing={3}>
          <FormInput  name="firstName" label="First Name" />
          <FormInput  name="lastName" label="Last Name" />
          <FormInput  name="address1" label="Address Line 1" />
          <FormInput  name="email" label="Email" />
          <FormInput  name="city" label="City" />
          <FormInput  name="zip" label="Zip / Postal code" />
          <Grid item xs={12} sm={6} >
            <InputLabel>Shipping Country</InputLabel>
            <Select value='india' fullWidth>
                  <MenuItem  value='india'>
                    India
                  </MenuItem>
            </Select>

          </Grid>
          <Grid item xs={12} sm={6}>
              <InputLabel>State</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
        </Grid>
                <br />
        <div style={{display:'flex', justifyContent: 'space-between'}}>
                  <Button component={Link} to='/cart' color='secondary' variant='outlined'>Back</Button>
                  <Button type='submit' color='primary' variant='contained'>Next</Button>

        </div>

      </form>
     </FormProvider>
    </>
  )
}

export default AddressForm

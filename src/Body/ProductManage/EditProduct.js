import { Box, Button, Checkbox, Chip, FormControl, Grid, InputLabel, NativeSelect, Paper, Stack, TextField, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import { allBrandData } from '../../Redux/Components/Brand/allBrandSlice';
import { useDispatch, useSelector } from 'react-redux';
import { categoryDetail } from '../../Redux/Components/Category/allCategorySlice';
import { subCategoryDetail } from '../../Redux/Components/SubCategory/allSubCategorySlice';
import { vendorDetail } from '../../Redux/Components/ProductManage/AllVendorSlice';
import { addProduct } from '../../Redux/Components/ProductManage/AddProductSlice';
import { useParams } from 'react-router-dom';
import { productDetail } from '../../Redux/Components/ProductManage/AllProductSlice';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  
  color: theme.palette.text.secondary,
}));

const EditProduct = () => {
   const [pName,setPName] = useState('');
   const [short_descp,setShort_descp] = useState('');
   const [long_descp,setLong_descp] = useState('');
  
   const [selling_price,Setselling_price] = useState('');
   const [discount_price,setdiscount_price] = useState('');
   const [product_code,setproduct_code] = useState('');
   const [product_qty,setproduct_qty] = useState('');

   const [chips, setChips] = useState(['new product', 'tag product']);
   const [inputValue, setInputValue] = React.useState('');

   const [product_size, setproduct_size] = useState(['small', 'medium','large']);
   const [inputValue1, setInputValue1] = React.useState('');

   const [product_color, setproduct_color] = useState(['red', 'green','blue','black']);
   const [inputValue2, setInputValue2] = React.useState('');
 
   const [photo,setPhoto] = useState();
   const [photoBase64, setPhotoBase64] = useState();

   const [photos, setPhotos] = useState([]);
  const [photoBase64s, setPhotoBase64s] = useState([]);


  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedDivision1, setSelectedDivision1] = useState('');
  const [selectedDivision2, setSelectedDivision2] = useState('');
  const [selectedDivision3, setSelectedDivision3] = useState('');

  const [selectedValue1, setSelectedValue1] = useState('0');
  const [selectedValue2, setSelectedValue2] = useState('0');
  const [selectedValue3, setSelectedValue3] = useState('0');
  const [selectedValue4, setSelectedValue4] = useState('0');

  const {id}=useParams();

const AllProduct=useSelector(state=>state.allProduct?.product)
console.log("allProduct",AllProduct);
useEffect(()=>{
    dispatch(productDetail())
},[])

const ProductDetail = AllProduct?.find(slid => {
  return slid.id == id;
});

console.log("productDetail id",ProductDetail);


function getUsers(){
  setPName(ProductDetail?.name)
  // setChips()
  // setproduct_size()
  // setproduct_color()
  setShort_descp(ProductDetail?.short_descp)
  setLong_descp(ProductDetail?.long_descp)
  Setselling_price(productDetail?.selling_price)
  setdiscount_price(productDetail?.discount_price)
  setproduct_code(productDetail?.product_code)
  setproduct_qty(productDetail?.product_qty)
  setSelectedDivision()
  setSelectedDivision1()
  setSelectedDivision2()
  setSelectedDivision3()
  setSelectedValue1()
  setSelectedValue2()
  setSelectedValue3()
  setSelectedValue4()
  // setPhotoBase64()
  // setPhotoBase64s()
}




  const handleChange7 = (event) => {
    setSelectedValue1(event.target.checked ? '1' : '0');

  };

  const handleChange8 = (event) => {
    setSelectedValue2(event.target.checked ? '1' : '0');
  };

  const handleChange9 = (event) => {
    setSelectedValue3(event.target.checked ? '1' : '0');
  };

  const handleChange10 = (event) => {
    setSelectedValue4(event.target.checked ? '1' : '0');
  };


   const handleKeyPress = (event) => {
     if (event.key === 'Enter') {
       event.preventDefault(); // Prevents the form submission
       const trimmedValue = inputValue.trim();
       if (trimmedValue !== '') {
         setChips((prevChips) => [...prevChips, trimmedValue]);
         setInputValue('');
       }
     }
   };
 
   const handleDelete = (chipToDelete) => {
     setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
   };


   const handleKeyPress1 = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents the form submission
      const trimmedValue = inputValue1.trim();
      if (trimmedValue !== '') {
       setproduct_size((prevChips) => [...prevChips, trimmedValue]);
       setInputValue1('');
     }
    }
  };

  const handleDelete1 = (chipToDelete) => {
    setproduct_size((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
  };


  const handleKeyPress2 = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents the form submission
      const trimmedValue = inputValue2.trim();
      if (trimmedValue !== '') {
       setproduct_color((prevChips) => [...prevChips, trimmedValue]);
       setInputValue2('');
     }
    }
  };

  const handleDelete2 = (chipToDelete) => {
    setproduct_color((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
  };
 
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);

      const reader = new FileReader();
      reader.onload = () => {
        setPhotoBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
    setPhotoBase64(null);
  };





  
  const handlePhotoChange1 = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newPhotos = [...photos];
    const newPhotoBase64s = [...photoBase64s];

    selectedFiles.forEach((file) => {
      newPhotos.push(file);

      const reader = new FileReader();
      reader.onload = () => {
        newPhotoBase64s.push(reader.result);
        setPhotoBase64s(newPhotoBase64s);
      };
      reader.readAsDataURL(file);
    });

    setPhotos(newPhotos);
  };

  const handleRemovePhoto1 = (index) => {
    const newPhotos = [...photos];
    const newPhotoBase64s = [...photoBase64s];
    newPhotos.splice(index, 1);
    newPhotoBase64s.splice(index, 1);
    setPhotos(newPhotos);
    setPhotoBase64s(newPhotoBase64s);
  };


const dispatch=useDispatch()
  const allBrand=useSelector(state=>state.allBrand.brand?.data)

  console.log('all brand',allBrand);

  useEffect(()=>{
    dispatch(allBrandData())
},[])


const allCategory=useSelector(state=>state.allCategory.allCat)

console.log('all Category',allCategory);
useEffect(()=>{
  dispatch(categoryDetail())
},[])

const allsubcategory=useSelector(state=>state.allSubCategory.allSubCat)
  console.log("subCategory detal",allsubcategory);
  
  useEffect(()=>{
      dispatch(subCategoryDetail())
  },[])



  const allVendor=useSelector(state=>state.allVendor.vendor)
  console.log("vendor detal",allVendor);
  
  useEffect(()=>{
      dispatch(vendorDetail())
  },[])


const handleChange = (e) => {
  setSelectedDivision(e.target.value);
};
console.log("selected value",selectedDivision);

const handleChange1 = (e) => {
  setSelectedDivision1(e.target.value);
};

console.log("selected value",selectedDivision1);

const handleChange2 = (e) => {
  setSelectedDivision2(e.target.value);
};

console.log("selected value",selectedDivision2);




const showcat = allsubcategory?.filter(Dist => {
  return Dist.category_id == selectedDivision1;
});



console.log("District id id",showcat);


const handleChange3 = (e) => {
  setSelectedDivision3(e.target.value);
};

console.log("selected value",selectedDivision3);


   const handleSubmit=(e)=>{
   e.preventDefault();
   const data={
    product_name:pName,
    short_descp,
    long_descp,
    product_tags:chips,
    product_size,
    product_color,
    product_thambnail:photo== undefined? null : photoBase64,
    multi_img:photos==undefined?null : photoBase64s,
    selling_price,
    discount_price,
    product_code,
    product_qty,
    brand_id:selectedDivision,
    category_id:selectedDivision1,
    subcategory_id:selectedDivision2==""?showcat[0]?.id:selectedDivision2,
    vendor_id:selectedDivision3,
    hot_deals:selectedValue1  ,
    featured: selectedValue2 ,
    special_offer:selectedValue3  ,
    special_offer:selectedValue4  ,
   }
   console.log(data);
   dispatch(addProduct({data}))
   };

   useEffect(()=>{
    getUsers();

  },[AllProduct])
  return (
    <div>
      <Grid sx={{marginBottom:'10px'}}>
        <Grid item xs={12}>
            <Typography variant='h5' sx={{fontWeight:"bold"}}>Add Product</Typography>
        </Grid>
        
        <form onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={10}>
                {/* <form onSubmit={handleSubmit}> */}
                <Item>
                <Typography
                sx={{marginLeft:"auto",paddingBottom:"10px",fontWeight:"bold"}}>
                  Product Name
                </Typography>

                   <TextField
                   style={{paddingBottom:"30px"}}
                  name="pName"
                  value={pName}
                  onChange={(e) => setPName(e.target.value)}
                  
                  type={'text'}
                  sx={{ width: '100%' }}
                  variant="outlined"
                  placeholder="Product Name"
                  
                />



                <Typography
                sx={{marginLeft:"auto",paddingBottom:"10px",fontWeight:"bold"}}>
                  Product Tags
                </Typography>
                <TextField
                      style={{paddingBottom:"30px"}}
                      variant="standard"
                      value={inputValue}
                      onChange={(event) => setInputValue(event.target.value)}
                      onKeyDown={handleKeyPress}
                      InputProps={{
                        startAdornment: (
                          <Stack direction="row" spacing={1}>
                            {chips.map((chip) => (
                              <Chip
                                color='primary'
                                key={chip}
                                label={chip}
                                onDelete={() => handleDelete(chip)}
                              />
                            ))}
                          </Stack>
                        ),
                      }}
                      fullWidth
                    />


                <Typography
                sx={{marginLeft:"auto",paddingBottom:"10px",fontWeight:"bold"}}>
                  Product Size
                </Typography>
                <TextField
                      style={{paddingBottom:"30px"}}
                      variant="standard"
                      value={inputValue1}
                      onChange={(event) => setInputValue1(event.target.value)}
                      onKeyDown={handleKeyPress1}
                      InputProps={{
                        startAdornment: (
                          <Stack direction="row" spacing={1}>
                            {product_size.map((chip) => (
                              <Chip
                                color='primary'
                                key={chip}
                                label={chip}
                                onDelete={() => handleDelete1(chip)}
                              />
                            ))}
                          </Stack>
                        ),
                      }}
                      fullWidth
                    />


                <Typography
                sx={{marginLeft:"auto",paddingBottom:"10px",fontWeight:"bold"}}>
                  Product Colour
                </Typography>
                <TextField
                      style={{paddingBottom:"30px"}}
                      variant="standard"
                      value={inputValue2}
                      onChange={(event) => setInputValue2(event.target.value)}
                      onKeyDown={handleKeyPress2}
                      InputProps={{
                        startAdornment: (
                          <Stack direction="row" spacing={1}>
                            {product_color.map((chip) => (
                              <Chip
                                color='primary'
                                key={chip}
                                label={chip}
                                onDelete={() => handleDelete2(chip)}
                              />
                            ))}
                          </Stack>
                        ),
                      }}
                      fullWidth
                    />



                <Typography
                sx={{marginLeft:"auto",paddingBottom:"10px",fontWeight:"bold"}}>
                  Short Description
                </Typography>

                   <TextField
                  name="short_descp"
                  style={{paddingBottom:"30px"}}
                  value={short_descp}
                  onChange={(e) => setShort_descp(e.target.value)}
                  multiline
                  rows={3} // Set the number of rows
                  cols={30} // Set the number of columns
                  type={'text'}
                  sx={{ width: '100%' }}
                  variant="outlined"
                  placeholder="Short Description"
                  
                />

                <Typography
                sx={{marginLeft:"auto",paddingBottom:"10px",fontWeight:"bold"}}>
                  Long Description
                </Typography>

                   <TextField
                  name="long_descp"
                  style={{paddingBottom:"30px"}}
                  value={long_descp}
                  onChange={(e) => setLong_descp(e.target.value)}
                  multiline
                  rows={3} // Set the number of rows
                  cols={30} // Set the number of columns
                  type={'text'}
                  sx={{ width: '100%' }}
                  variant="outlined"
                  placeholder="Long Description"
                  
                />

                <Typography
                sx={{marginLeft:"auto",paddingBottom:"10px",fontWeight:"bold"}}>
                  Main Thumbnail
                </Typography>
              <input
                type="file"
                onChange={handlePhotoChange}
                accept="image/jpeg, image/jpg, image/png, image/webp, image/gif"

              />
              <br/>
              {photoBase64?
              (
              <div style={{paddingBottom:"40px"}}>
              
              <img src={photoBase64} alt='profile image'  width="100px" height="100px"/>
              <br/>
              <button onClick={handleRemovePhoto} >Remove Photo</button>

              </div>
              ):(null)}              
            

              <hr></hr>
            <Typography
                sx={{marginLeft:"auto",paddingBottom:"10px",fontWeight:"bold"}}>
                  Mutiple Images
                </Typography>
               
                <input
                  type="file"
                  onChange={handlePhotoChange1}
                  accept="image/jpeg, image/jpg, image/png, image/webp, image/gif"
                  multiple // Allow multiple file selection
                />
                <br />
                <div style={{ display: 'flex' }}>
                {photoBase64s.map((photoBase64, index) => (
                  <div key={index} >
                    <img src={photoBase64} alt="profile image" width="100px" height="100px" />
                    <br />
                    <button onClick={() => handleRemovePhoto1(index)}>Remove</button>
                  </div>
                ))}  
                </div>

                
                </Item>
                {/* </form> */}
              </Grid>
              <Grid item xs={6}>
                <Item>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                    <Typography
                        sx={{marginLeft:"auto",paddingBottom:"10px",fontWeight:"bold"}}>
                          Product Price
                        </Typography>

                          <TextField
                          style={{paddingBottom:"30px"}}
                          name="selling_price"
                          value={selling_price}
                          onChange={(e) => Setselling_price(e.target.value)}
                          
                          type={'number'}
                          sx={{ width: '100%' }}
                          variant="outlined"
                          placeholder="00.00"
                          
                        />
                    </Grid>
                    <Grid item xs={8}>
                    <Typography
                        sx={{marginLeft:"auto",paddingBottom:"10px",fontWeight:"bold"}}>
                          Discound Price
                        </Typography>

                          <TextField
                          style={{paddingBottom:"30px"}}
                          name="discount_price"
                          value={discount_price}
                          onChange={(e) => setdiscount_price(e.target.value)}
                          
                          type={'number'}
                          sx={{ width: '100%' }}
                          variant="outlined"
                          placeholder="00.00"
                          
                        />
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                    <Typography
                        sx={{marginLeft:"auto",paddingBottom:"10px",fontWeight:"bold"}}>
                          Product Code
                        </Typography>

                          <TextField
                          style={{paddingBottom:"30px"}}
                          name="product_code"
                          value={product_code}
                          onChange={(e) => setproduct_code(e.target.value)}
                          
                          type={'number'}
                          sx={{ width: '100%' }}
                          variant="outlined"
                          placeholder="00.00"
                          
                        />
                    </Grid>
                    <Grid item xs={8}>
                    <Typography
                        sx={{marginLeft:"auto",paddingBottom:"10px",fontWeight:"bold"}}>
                          Product Quantity
                        </Typography>

                          <TextField
                          style={{paddingBottom:"30px"}}
                          name="product_qty"
                          value={product_qty}
                          onChange={(e) => setproduct_qty(e.target.value)}
                          
                          type={'number'}
                          sx={{ width: '100%' }}
                          variant="outlined"
                          placeholder="00.00"
                          
                        />
                    </Grid>
                  </Grid>
                </Box>
                  <Box sx={{paddingBottom:"40px"}}>
                  <FormControl fullWidth>

                  <Typography
                        sx={{marginRight:"auto",fontWeight:"bold"}}>
                          Product Brand 
                        </Typography>
                    <InputLabel variant="contained" htmlFor="uncontrolled-native">
                      
                    </InputLabel>
                    <NativeSelect
                      onChange={handleChange} 
                    >
                      <option value=""></option>
                      {allBrand?.map((allcat) => (
                        <option key={allcat.id} value={allcat.id}>
                          {allcat.brand_name}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </Box>


                <Box sx={{paddingBottom:"40px"}}>
                  <FormControl fullWidth>

                  <Typography
                        sx={{marginRight:"auto",fontWeight:"bold"}}>
                          Product Category 
                        </Typography>
                    <InputLabel variant="contained" htmlFor="uncontrolled-native">
                      
                    </InputLabel>
                    <NativeSelect
                      onChange={handleChange1} 
                    >
                      <option value=""></option>
                      {allCategory?.map((allcat) => (
                        <option key={allcat.id} value={allcat.id}>
                          {allcat.category_name}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </Box>


                <Box sx={{paddingBottom:"40px"}}>
                  <FormControl fullWidth>

                  <Typography
                        sx={{marginRight:"auto",fontWeight:"bold"}}>
                          Product SubCategory 
                        </Typography>
                    <InputLabel variant="contained" htmlFor="uncontrolled-native">
                      
                    </InputLabel>
                    <NativeSelect
                      // defaultValue={showcat?.id}
                      onChange={handleChange2} 
                    >
                      
                      {showcat?.map((allcat) => (
                        <option key={allcat.id} value={allcat.id}>
                          {allcat.subcategory_name}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </Box>



                <Box sx={{paddingBottom:"40px"}}>
                  <FormControl fullWidth>

                  <Typography
                        sx={{marginRight:"auto",fontWeight:"bold"}}>
                          Select Vendor 
                        </Typography>
                    <InputLabel variant="contained" htmlFor="uncontrolled-native">
                      
                    </InputLabel>
                    <NativeSelect
                      // defaultValue={showcat?.id}
                      onChange={handleChange3} 
                    >
                       <option value=""></option>
                      {allVendor?.map((allcat) => (
                        <option key={allcat.id} value={allcat.id}>
                          {allcat.name}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </Box>





                <Box>
                  <Grid container spacing={2} columns={16} sx={{ display: 'flex' }}>
                    <Grid item xs={8}>
                    <Typography
                        sx={{marginLeft:"auto",fontWeight:"bold"}}>
                        Hot Deals&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <Checkbox
                            checked={selectedValue1 === '1'}
                            onChange={handleChange7}
                            value={selectedValue1}
                          />
                        </Typography>
                        
                    </Grid>
                    <Grid item xs={8}>
                    <Typography
                        sx={{marginLeft:"auto",fontWeight:"bold"}}>
                           Featured&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:    <Checkbox
                                  checked={selectedValue2 === '1'}
                                  onChange={handleChange8}
                                  value={selectedValue2}
                                />
                        </Typography>
                     
                    </Grid>
                  </Grid>
                </Box>

                <Box>
                  <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                    <Typography
                        sx={{marginLeft:"auto",fontWeight:"bold"}}>
                          Special offer:  <Checkbox
                              checked={selectedValue3 === '1'}
                              onChange={handleChange9}
                              value={selectedValue3}
                            />
                        </Typography>
                       
                    </Grid>
                    <Grid item xs={8}>
                    <Typography
                        sx={{marginLeft:"auto",fontWeight:"bold"}}>
                          Special Deals: <Checkbox
                              checked={selectedValue4 === '1'}
                              onChange={handleChange10}
                              value={selectedValue4}
                            />
                        </Typography>
                        
                    </Grid>
                  </Grid>
                </Box>



                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} columns={16}>
                    <Grid item xs={16}>
                    <Button
                      type='submit'
                      endIcon={<PersonOutlineSharpIcon style={{color:"green"}}/>}
                          style={{color:'black'}}
                          color="inherit"
                          fullWidth
                          sx={{borderRadius:2,marginTop:"40px",background:'inherit'}} 
                          variant='contained'>
                          Save   Product
                      </Button> 
                    </Grid>
                  </Grid>
                </Box>

                </Item>
              </Grid>
            </Grid>
          </Box>
        </form>
        
      </Grid>
    </div>
  )
}

export default EditProduct;
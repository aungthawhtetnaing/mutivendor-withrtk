import { Box, Button, Chip, FormControl, Grid, InputLabel, NativeSelect, Paper, Stack, TextField, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import { allBrandData } from '../../Redux/Components/Brand/allBrandSlice';
import { useDispatch, useSelector } from 'react-redux';
import { categoryDetail } from '../../Redux/Components/Category/allCategorySlice';
import { subCategoryDetail } from '../../Redux/Components/SubCategory/allSubCategorySlice';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  
  color: theme.palette.text.secondary,
}));

const AddProduct = () => {
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



const showcat = allsubcategory?.find(Dist => {
  return Dist.category_id == selectedDivision1;
});



console.log("District id id",showcat);

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
   }
   console.log(data);
   };
  return (
    <div>
      <Grid sx={{marginBottom:'10px'}}>
        <Grid item xs={12}>
            <Typography>Add Product</Typography>
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
                          name="pName"
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
                          name="pName"
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
                          name="pName"
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
                          name="pName"
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
                  <Box>
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


                <Box>
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


                <Box>
                  <FormControl fullWidth>

                  <Typography
                        sx={{marginRight:"auto",fontWeight:"bold"}}>
                          Product SubCategory 
                        </Typography>
                    <InputLabel variant="contained" htmlFor="uncontrolled-native">
                      
                    </InputLabel>
                    <NativeSelect
                      defaultValue={showcat?.id}
                      onChange={handleChange} 
                    >
                      <option value=""></option>
                      {allsubcategory?.map((allcat) => (
                        <option key={allcat.id} value={allcat.id}>
                          {allcat.subcategory_name}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>


          
          <span>
           
           &nbsp;  &nbsp;
           <Button
           type='submit'
           endIcon={<PersonOutlineSharpIcon style={{color:"green"}}/>}
              style={{color:'black'}}
              color="inherit"
               sx={{marginTop:3, borderRadius:2,background:'inherit'}} 
               variant='contained'>
              Update
           </Button> 
           </span>
        </form>
        
      </Grid>
    </div>
  )
}

export default AddProduct
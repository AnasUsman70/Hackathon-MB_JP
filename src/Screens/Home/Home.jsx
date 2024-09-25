import React from 'react';
import Navbar from '../../components/Navbar';
import { Button, Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Cards from '../Room/Cards';
import { productData } from '../Room/data';
import Footer from '../../components/Footer';

const Home = () => {
  const navigate = useNavigate();

  const handleViewRooms = () => {
    navigate("/roomlist");
  };

  const getRoomByIndex = (index) => {
    return productData[index] || null;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', 
        overflow: 'hidden', 
      }}
    >
      <Navbar />

      <Box
        className="hero-section"
        sx={{
          minHeight: { xs: '60vh', md: '100vh' },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: { xs: '20px', md: '0' },
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '3rem' } }}>
          Welcome to Our Hotel
        </Typography>
        <Typography variant="h6" sx={{ marginTop: '20px', maxWidth: '600px', fontSize: { xs: '1rem', md: '1.25rem' } }}>
          Experience the ultimate comfort and luxury. Book your stay with us and enjoy an unforgettable experience.
        </Typography>
        <Button
          variant="contained"
          color='error'
          sx={{ marginTop: '30px', padding: { xs: '8px 16px', md: '10px 20px' }, fontSize: { xs: '14px', md: '18px' }}}
          onClick={handleViewRooms}
        >
          View Rooms
        </Button>
      </Box>

      <Box id="rooms-section" sx={{ padding: { xs: '30px 10px', md: '50px 20px' }, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '30px' }}>
          Featured Rooms
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          {['0', '10', '7'].map(index => {
            const room = getRoomByIndex(index);
            return room ? (
              <Grid item key={room.id} xs={12} sm={6} md={4}>
                <Cards
                  id={room.id}
                  title={room.title}
                  desc={room.description}
                  image={room.image}
                  category={room.category}
                  rating={room.rating.rate}
                  price={room.price}
                />
              </Grid>
            ) : null;
          })}
        </Grid>
      </Box>

     <Box sx={{ padding: { xs: '30px 10px', md: '50px 20px' }, backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '30px' }}>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {["World-class Service", "Luxury Rooms", "Premium Dining"].map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ height: '250px', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="150"
                  image={
                    feature === "World-class Service"
                      ? "https://dreamworld.pk/nn/data1/images2/n5.jpg?AspxAutoDetectCookieSupport=1"
                      : feature === "Luxury Rooms"
                      ? "https://thumbs.dreamstime.com/z/bedroom-luxury-suite-hotel-8815983.jpg"
                      : "https://thumbs.dreamstime.com/z/hotel-fine-dining-restaurant-17873534.jpg"
                  }
                  alt={feature}
                  sx={{ objectFit: 'cover', width: '100%' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{feature}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Enjoy our {feature.toLowerCase()} and make your stay unforgettable.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;

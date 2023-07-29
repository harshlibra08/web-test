import React from "react";
import { MantineProvider, Button, Stack , Card, Image, Text,  Paper} from "@mantine/core";

const PrimaryButton = ({ ...props }) => (
  <Button
    styles={{
      root: {
        backgroundColor: "#FFFFFF",
        color: "#555459",
        fontWeight: 600,
        lineHeight: "22.4px",
        border: "1px solid",
        "&:hover": {
          backgroundColor: "#f4f4f4",
          color: "#555459",
        },
      },
      label: {
        color: "#555459",
        textTransform: "uppercase",
      },
    }}
    {...props}
  />
);

const SecondaryButton = ({ ...props }) => (
  <Button
    styles={{
      root: {
        backgroundColor: "#FFFFFF",
        color: "#292929", 
        fontWeight: 600,
        lineHeight: "22.4px",
        "&:hover": {
          backgroundColor: "#FFFFFF", // Override hover background color to match default state
         
        },
      },
      label: {
        color: "#292929",
       
      },
    }}
    {...props}
  />
);

const TertiaryButton = ({ ...props }) => (
    <Button
      styles={{
        root: {
          backgroundColor: "#FFFFFF",
         
          fontWeight: 700,
          lineHeight: "22.4px",
          fontSize: "12px",

          "&:hover": {
            backgroundColor: "#FFFFFF", // Override hover background color to match default state
           
          },
        },
        label: {
          color: "#555459",
          textTransform: "uppercase",
        },
      }}
      {...props}
    />
  );


function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "sans-serif",
        colors: {
          "libra-gray": [
            "#f8f9fa",
            "#f1f3f5",
            "#e9ecef",
            "#dee2e6",
            "#ced4da",
            "#3E3E3E",
            "#5B5B5B",
            "#495057",
            "#343A40",
            "#212529",
          ],
        },
        primaryShade: 5,
        radius: {
          xs: "4px",
        },
        defaultRadius: "xs",
      }}
    >
    <Paper>
      <Stack align="center">
        <Button color="libra-gray" style={{ textTransform: "uppercase" }}>select options</Button>
        <PrimaryButton>add to wishlist</PrimaryButton>
        <SecondaryButton>Apply Now</SecondaryButton>
        <TertiaryButton>View cart</TertiaryButton>
      
     
      <Card shadow="sm" style={{alignItems:"center", display: "flex", maxWidth: "1212px" , maxHeight: "384px", borderRadius: "4px"}}>
      {/* Left Section - Product Image */}
      <div style={{paddingLeft:"47px", paddingTop:"49px", paddingBottom: "51px"}}>
        <Image
          src="https://generation-sessions.s3.amazonaws.com/7626af25d316784c76530b734963d634/img/pow-3-pa-cl-50a-1@2x.png" // Replace with the URL of your product image
          alt="Product Image"
          height={284}
          width={284}
          fit="cover"
          
          
        />
      </div>

      {/* Center Section - Product Name and Description */}
      <div style={{ flex: "1", padding: "26px" }}>
        <Text weight={600} size={"18px"} style={{ lineHeight: "22.77px", marginBottom: 8,  }} color="#414141">
        Three Phase Thyristor Power Controller 
        </Text>
        
        <Text weight={600} size={"14px"}  color="#E83214">
        POW-3-PA-CL
        </Text>

        <Text top={128}  weight={400} size={"12px"} style={{lineHeight: "19.2px", marginTop: 26 }} color="#555459" >
        <li>
            Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire Star  
        </li>
        <li>
            3 Wire Close or Open Delta Configurations with Current Control/Current Limit and Over Load Protection.
        </li>
        </Text>
      </div>

      {/* Right Section - Price and Buttons */}
      <div style={{ flex: "0 0 30%", display: "flex", flexDirection: "column", alignItems: "flex-end", padding: "16px" }}>
       
        <Text left={852} weight={400} size={"10px"} style={{ letterSpacing:0, marginBottom: 8, marginRight:100 , lineHeight: "normal"}} color="#707070">
            Prices are inclusive of Delivery Charges.
        </Text>
       
       
        <Text weight={400} size={"20px"} style={{  marginRight:112 , marginBottom: 8 }} color="#414141">
            ₹12,600 – ₹14,700
        </Text>

        <Text  weight={700} size={"12px"} style={{letterSpacing:0, lineHeight: "normal" ,marginBottom: 8,  }} color="#414141">
        <p>In Stock</p>
        
        </Text>

        <Text weight={400} size={"12px"} style={{lineHeight: "19.2px", }} color="#555459" >
        <p>Get 5% Instant Discount Up to ₹1250 On Lea...</p>
        <p>Get 10% Instant Discount Up to ₹2250 </p>
        </Text>

        <Button color="blue" style={{ marginBottom: 8 }}>
          Add to Cart
        </Button>
        <Button color="red" style={{ marginBottom: 8 }}>
          Buy Now
        </Button>
      </div>
        </Card>

        </Stack>

    </Paper>
    </MantineProvider>
    
  );

  




}

export default App;

import React from "react";
import {
	MantineProvider,
	Button,
	Stack,
	Card,
	Image,
	Text,
	Paper,
	List,
	Divider,
	Group,
	TextInput,
	Autocomplete,
	Header,
	createStyles,
	

} from "@mantine/core";


import { IconSearch, IconUser, IconHeart, IconShoppingCart,  } from '@tabler/icons-react';


const OptionsButton = ({ ...props }) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#3E3E3E",
				color: "#555459",
				fontWeight: 600,
				lineHeight: "22.4px",
				border: "1px solid",
				"&:hover": {
					backgroundColor: "#5B5B5B",
					color: "#555459",
				},
			},
			label: {
				color: "#FFFFFF",
				textTransform: "uppercase",
			},
		}}
		{...props}
	/>
);

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

	const links = [
		{ link: "#", label: "About us" },
		{ link: "#", label: "Products" },
		{ link: "#", label: "Journal" },
		{ link: "#", label: "Contact us" },
		// Add more links here as needed
	  ];
	
	const useStyles = createStyles((theme) => ({
		header: {
			paddingLeft: theme.spacing.md,
			paddingRight: theme.spacing.md,
		  },
		
		  inner: {
	
			display: 'flex',
			
			
		  },
		
		  links: {
			[theme.fn.smallerThan('md')]: {
			  
			  marginLeft:0
			},
			marginLeft: theme.spacing.lg,
			paddingRight: 13,
			paddingTop:23,
			paddingBottom:21,
		
			color: "#292929", 
			textAlign: "center", 
			left:"361px",
			fontSize: "14px",
			fontStyle: "normal",
			fontWeight: 400, 
			lineHeight: "normal", 
		  },
		
		  search: {
			[theme.fn.smallerThan('xs')]: {
			  display: 'none',
			},
			
		  },
		
		  link: {
			display: 'block',
			lineHeight: 1,
			padding: " 0 64px",
			borderRadius: theme.radius.sm,
			textDecoration: 'none',
			color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
			fontSize: theme.fontSizes.sm,
			fontWeight: 500,
			
						
		
		  },
	  }));

	  interface HeaderSearchProps {
		links: { link: string; label: string }[];
	  }
	  
	   function HeaderSearch({ links }: HeaderSearchProps) {
		
		const { classes } = useStyles();
	  
		const items = links.map((link) => (
		  <a
			key={link.label}
			href={link.link}
			className={classes.link}
			onClick={(event) => event.preventDefault()}
		  >
			{link.label}
		  </a>
		));

		return (
			<Header height={56} className={classes.header} mb={120}>
			  <div className={classes.inner}>
				<Group>
				 
				  <Image
					src="https://generation-sessions.s3.amazonaws.com/25b8f529358ae6ac4e9d1cadb72e6272/img/graphic3-5@2x.png"
					alt="Libratherm Logo"
					height={"40px"} 
					width={"107px"}
					
					/>
				</Group>
	  
				<Group>
				  <Group ml={50} spacing={5} className={classes.links}>
					{items}
				  </Group>
				  <Autocomplete
							className={classes.search}
							placeholder="Search"
							icon={<IconSearch size="1rem" stroke={1.5} />} data={[]}					
				  />
				</Group>
				{/* Add the clickable icons and the export options button */}
				<Group spacing={24} style={{ marginLeft: "auto" }}>
					<IconUser size={24} color="#555459" />
					<IconHeart size={24} color="#555459" />
					<IconShoppingCart size={24} color="#555459" />
					<OptionsButton >we're Hiring</OptionsButton>
				</Group>
			  </div>
			</Header>
		  );
		};


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
			<HeaderSearch links={links} />
			<Paper>
				<Stack align="center">
					<Button color="libra-gray" style={{ textTransform: "uppercase" }}>
						select options
					</Button>
					<OptionsButton>Select Options</OptionsButton>
					<PrimaryButton>add to wishlist</PrimaryButton>
					<SecondaryButton>Apply Now</SecondaryButton>
					<TertiaryButton>View cart</TertiaryButton>

					<Card
						withBorder
					>
						<Group>
							<Paper>
								<Image
									src="https://generation-sessions.s3.amazonaws.com/7626af25d316784c76530b734963d634/img/pow-3-pa-cl-50a-1@2x.png" // Replace with the URL of your product image
									alt="Product Image"
									height={284}
									width={284}
									fit="cover"
								/>
							</Paper>
							<Paper w={400} px="lg">
								<Text
									weight={600}
									size={"18px"}
									style={{ lineHeight: "22.77px", marginBottom: 8 }}
									color="#414141"
								>
									Three Phase Thyristor Power Controller
								</Text>
								<Text weight={600} size={"14px"} color="#E83214">
									POW-3-PA-CL
								</Text>
								<Text
									top={128}
									weight={400}
									size={"12px"}
									style={{ lineHeight: "19.2px", marginTop: 26 }}
									color="#555459"
								>
									<List>
										<List.Item style={{fontSize:"12px", fontWeight:"400", color:"#555459"}}>
											Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4
											Wire Star
										</List.Item>
										<List.Item style={{fontSize:"12px", fontWeight:"400", color:"#555459"}}>
											3 Wire Close or Open Delta Configurations with Current Control/Current Limit
											and Over Load Protection.
										</List.Item>
									</List>
								</Text>
							</Paper>
							<Divider orientation="vertical"></Divider>
							<Paper>
								<Text
									left={852}
									weight={400}
									size={"10px"}
									style={{ top: 47, letterSpacing: 0, marginRight: 100 }}
									color="#707070"
								>
									Prices are inclusive of Delivery Charges.
								</Text>
								<Text
									weight={400}
									size={"20px"}
									style={{ top: 0, marginRight: 112, marginBottom: 8 }}
									color="#414141"
								>
									₹12,600 – ₹14,700
								</Text>
								<div style={{ height: "67px", left: 0, top: "63px", width: "296px", paddingTop:"10px" }}>
									<div style={{ display: "flex", alignItems: "center" }}>
										<Image
											src="https://generation-sessions.s3.amazonaws.com/513e9ffa8e311059b1addd368adeef8e/img/frame-2.svg"
											height={"18px"}
											width={"18px"}
											left={0}
											top={"3px"}
											style={{ marginRight: "4px" }}
										/>
										<Text weight={700} size={"12px"} color="#414141">
											In Stock
										</Text>
									</div>

									<div style={{ display: "flex", alignItems: "center" }}>
										<Image
											src="https://generation-sessions.s3.amazonaws.com/513e9ffa8e311059b1addd368adeef8e/img/frame-1.svg"
											height={"16px"}
											width={"16px"}
											style={{ marginRight: "8px" }}
										/>
										<Text weight={400} size={"12px"} color="#555459">
											Get 5% Instant Discount Up to ₹1250 On Lea...
										</Text>
									</div>

									<div style={{ display: "flex", alignItems: "center" }}>
										<Image
											src="https://generation-sessions.s3.amazonaws.com/513e9ffa8e311059b1addd368adeef8e/img/frame-1.svg"
											height={"16px"}
											width={"16px"}
											style={{ marginRight: "8px" }}
										/>
										<Text weight={400} size={"12px"} color="#555459">
											Get 10% Instant Discount Up to ₹2250
										</Text>
									</div>
								</div>
			
								<Stack spacing="xs" align="stretch" py={15}>
									<OptionsButton>Select Options</OptionsButton>
									<PrimaryButton>Add to Wishlist</PrimaryButton>
								</Stack>
							</Paper>
						</Group>
						
					</Card>
				</Stack>
			</Paper>
<br/><br/><br/>
			<TextInput 
				placeholder="PRANAY KOTADIA"
				label="Name" 
				radius="xs"
				size="md"	
				style={{width:"288px", height: "43px", fontWeight:"400", color:"#555459", fontSize:"16px", margin:"auto", }}	
				
    		/>

			<Autocomplete
				label="Country"
				placeholder=""
				data={['India', 'USA', 'Iran', 'France', 'Canada', 'Antartica']}
				style={{width:"288px", height: "43px", fontWeight:"400", color:"#555459", fontSize:"16px", margin:" 51px auto", }}
			/>
				
				
				
				<Paper>
				<Group>
				<Card >
				<div style={{position:'relative', padding:"0 24px",}}>
					<Image
					src="https://generation-sessions.s3.amazonaws.com/4598064275a1864482e528adf597534f/img/rectangle-6096.svg"
					height={391}
					width={391}
					alt="Norway"
					/>
		

				<Group position="apart" mt="md" mb="xs" >
					<Text weight={500}>Glass Manufacture</Text>
				
				</Group>

				<Text size="sm" color="dimmed">
				Libratherm has supplied various types of temperature controllers, thyristor power controllers and control panels to the industries manufacturing Files, Diamond Tools, Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular blades etc… The temperature of the electrical or fuel fired heating systems, used for annealing, hardening, steam bluing and similar such processes, has been in use for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non contact sensors.
				</Text>
				</div>
				
				</Card>

				<Card>
				<div style={{position:'relative', padding:"0 24px"}}>
					<Image
					src="https://generation-sessions.s3.amazonaws.com/4598064275a1864482e528adf597534f/img/unsplash-mjwgkmwkdda@2x.png"
					height={391}
					width={391}
					alt="Norway"
					/>
		

				<Group position="apart" mt="md" mb="xs">
					<Text weight={500}>Jewelry Manufacture</Text>
				
				</Group>

				<Text size="sm" color="dimmed">
				Libratherm has supplied various types of temperature controllers, thyristor power controllers and control panels to the industries manufacturing Files, Diamond Tools, Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular blades etc… The temperature of the electrical or fuel fired heating systems, used for annealing, hardening, steam bluing and similar such processes, has been in use for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non contact sensors.
				</Text>
				</div>
				
				</Card>

				<Card>
				<div style={{position:'relative', padding:"0 24px"}}>
					<Image
					src="https://generation-sessions.s3.amazonaws.com/4598064275a1864482e528adf597534f/img/unsplash-mjwgkmwkdda-1@2x.png"
					height={391}
					width={391}
					alt="Norway"
					/>
		

				<Group position="apart" mt="md" mb="xs">
					<Text weight={500}>Steel Plants</Text>
				
				</Group>

				<Text size="sm" color="dimmed">
				Libratherm has supplied various types of temperature controllers, thyristor power controllers and control panels to the industries manufacturing Files, Diamond Tools, Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular blades etc… The temperature of the electrical or fuel fired heating systems, used for annealing, hardening, steam bluing and similar such processes, has been in use for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non contact sensors.
				</Text>
				</div>
				
				</Card>
				</Group>
				</Paper>
				
		</MantineProvider>
		
	);
}


export default App;

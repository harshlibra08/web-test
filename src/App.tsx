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
	Grid,
	Divider,
	Group,
} from "@mantine/core";

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
					<Button color="libra-gray" style={{ textTransform: "uppercase" }}>
						select options
					</Button>
					<OptionsButton>Select Options</OptionsButton>
					<PrimaryButton>add to wishlist</PrimaryButton>
					<SecondaryButton>Apply Now</SecondaryButton>
					<TertiaryButton>View cart</TertiaryButton>

					<Card
						// style={{
						// 	alignItems: "center",
						// 	display: "flex",
						// 	maxWidth: "1212px",
						// 	maxHeight: "384px",
						// 	borderRadius: "4px",
						// 	width: "100%",
						// 	justifyContent: "center",
						// }}
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
										<List.Item>
											Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4
											Wire Star
										</List.Item>
										<List.Item>
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
								<div style={{ height: "67px", left: 0, top: "63px", width: "296px" }}>
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
								{/* <div style={{ position:"relative",height:"84px"}}>
        <div style={{left:0, top:0,  width:"290px", }}>
        <OptionsButton style={{ marginBottom: 8, }}>Select Options</OptionsButton>
        </div>
        <div style={{top:"46px", width:"290px"}}>
        <PrimaryButton style={{ marginBottom: 8 }}>Add to Wishlist</PrimaryButton>
        </div>
        </div> */}
								<Stack align="stretch">
									<OptionsButton>Select Options</OptionsButton>
									<PrimaryButton>Add to Wishlist</PrimaryButton>
								</Stack>
							</Paper>
						</Group>
						{/* Left Section - Product Image */}
						{/* <div style={{ paddingLeft: "47px", paddingTop: "49px", paddingBottom: "51px" }}></div> */}
						{/* Center Section - Product Name and Description */}
						{/* <Image
							src="https://generation-sessions.s3.amazonaws.com/513e9ffa8e311059b1addd368adeef8e/img/line-200-1.svg"
							height={309}
							left={788}
							top="38px"
							width={"1px"}
						/> */}
						{/* Right Section - Price and Buttons */}
					</Card>
				</Stack>
			</Paper>
		</MantineProvider>
	);
}

export default App;

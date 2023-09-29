import {
	Paper,
	Stack,
	Button,
	Card,
	Group,
	List,
	Divider,
	TextInput,
	Autocomplete,
	Image,
	Text,
	ButtonProps,
} from "@mantine/core";
import React from "react";

type Props = {};
const OptionsButton = ({ ...props }: ButtonProps) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#3E3E3E",
				color: "#555459",
				fontWeight: 600,
				lineHeight: "22.4px",
				border: "1px solid",
				// "&:hover": {
				// 	backgroundColor: "#5B5B5B",
				// 	color: "#555459",
				// },
			},
			label: {
				color: "#FFFFFF",
			},
		}}
		// uppercase={true}
		{...props}
	/>
);

const PrimaryButton = ({ ...props }: ButtonProps) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#FFFFFF",
				color: "#555459",
				fontWeight: 600,
				lineHeight: "22.4px",
				border: "1px solid",
				// "&:hover": {
				// 	backgroundColor: "#f4f4f4",
				// 	color: "#555459",
				// },
			},
			label: {
				color: "#555459",
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
				// "&:hover": {
				// 	backgroundColor: "#FFFFFF", // Override hover background color to match default state
				// },
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

				// "&:hover": {
				// 	backgroundColor: "#FFFFFF", // Override hover background color to match default state
				// },
			},
			label: {
				color: "#555459",
				textTransform: "uppercase",
			},
		}}
		{...props}
	/>
);

const Buttons = (props: Props) => {
	return (
		<>
			<Paper>
				<Stack align="center">
					<Button color="libra-gray" style={{ textTransform: "uppercase" }}>
						select options
					</Button>
					<OptionsButton>Select Options</OptionsButton>
					<PrimaryButton>add to wishlist</PrimaryButton>
					<SecondaryButton>Apply Now</SecondaryButton>
					<TertiaryButton>View cart</TertiaryButton>
					<br />
					<br />
					<br />
					<br />

					{/* Product card */}
					<Card withBorder>
						<Group>
							<Paper>
								<Image
									src="https://generation-sessions.s3.amazonaws.com/7626af25d316784c76530b734963d634/img/pow-3-pa-cl-50a-1@2x.png"
									alt="Product Image"
									height={284}
									width={284}
									fit="cover"
								/>
							</Paper>
							<Paper w={400} px="lg">
								<Text
									fw={600}
									size={"18px"}
									style={{ lineHeight: "22.77px", marginBottom: 8 }}
									color="#414141"
								>
									Three Phase Thyristor Power Controller
								</Text>
								<Text fw={600} size={"14px"} color="#E83214">
									POW-3-PA-CL
								</Text>
								<Text
									top={128}
									fw={400}
									size={"12px"}
									style={{ lineHeight: "19.2px", marginTop: 26 }}
									color="#555459"
								>
									<List>
										<List.Item
											style={{
												fontSize: "12px",
												fontWeight: "400",
												color: "#555459",
											}}
										>
											Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4
											Wire Star
										</List.Item>
										<List.Item
											style={{
												fontSize: "12px",
												fontWeight: "400",
												color: "#555459",
											}}
										>
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
									fw={400}
									size={"10px"}
									style={{ top: 47, letterSpacing: 0, marginRight: 100 }}
									color="#707070"
								>
									Prices are inclusive of Delivery Charges.
								</Text>
								<Text
									fw={400}
									size={"20px"}
									style={{ top: 0, marginRight: 112, marginBottom: 8 }}
									color="#414141"
								>
									₹12,600 – ₹14,700
								</Text>
								<div
									style={{
										height: "67px",
										left: 0,
										top: "63px",
										width: "296px",
										paddingTop: "10px",
									}}
								>
									<div style={{ display: "flex", alignItems: "center" }}>
										<Image
											src="https://generation-sessions.s3.amazonaws.com/513e9ffa8e311059b1addd368adeef8e/img/frame-2.svg"
											height={"18px"}
											width={"18px"}
											left={0}
											top={"3px"}
											style={{ marginRight: "4px" }}
										/>
										<Text fw={700} size={"12px"} color="#414141">
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
										<Text fw={400} size={"12px"} color="#555459">
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
										<Text fw={400} size={"12px"} color="#555459">
											Get 10% Instant Discount Up to ₹2250
										</Text>
									</div>
								</div>

								<Stack gap="xs" align="stretch" py={15}>
									<OptionsButton>Select Options</OptionsButton>
									<PrimaryButton>Add to Wishlist</PrimaryButton>
								</Stack>
							</Paper>
						</Group>
					</Card>
				</Stack>
			</Paper>
			<br />
			<br />
			<br />

			<TextInput
				placeholder="PRANAY KOTADIA"
				label="Name"
				radius="xs"
				size="md"
				style={{
					width: "288px",
					height: "43px",
					fontWeight: "400",
					color: "#555459",
					fontSize: "16px",
					margin: "auto",
				}}
			/>
			<Autocomplete
				label="Country"
				placeholder=""
				data={["India", "USA", "Iran", "France", "Canada", "Antartica"]}
				style={{
					width: "288px",
					height: "43px",
					fontWeight: "400",
					color: "#555459",
					fontSize: "16px",
					margin: " 51px auto",
				}}
			/>
		</>
	);
};

export default Buttons;

import {
	Paper,
	Container,
	Group,
	Stack,
	SimpleGrid,
	TextInput,
	Textarea,
	Box,
	Divider,
	Text,
	Button,
	ButtonProps,
} from "@mantine/core";
import React from "react";

type Props = {};
const PrimaryButton = ({ ...props }: ButtonProps) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#FFFFFF",
				color: "#555459",
				fontWeight: 600,
				lineHeight: "22.4px",
				border: "1px solid",
			},
			label: {
				color: "#555459",
			},
		}}
		{...props}
	/>
);
const ContactUs = (props: Props) => {
	return (
		<Paper w={1440} h={1541}>
			<Container>
				<Text style={{ color: "#262728" }} fz={16} fw={600} mt={77} ta="center">
					LETS CONNECT
				</Text>
				<Text style={{ color: "#262728" }} fz={32} fw={600} mt={18} ta="center">
					Get in touch with us
				</Text>
			</Container>
			<Text style={{ color: "#555459" }} w={720} fz={16} fw={400} mt={18} ml={337}>
				Libratherm is an innovation-driven manufacturer of Process Control Instruments and Systems
				since 1991. We cater to a wide range of industries, by providing accurate measurement,
				precise control
			</Text>
			{/* <MantineProvider
				theme={{
					colorScheme: "dark",
				}}
			> */}
			<Paper w={1440} h={1236} bg={"black"} mt={77}>
				<Group>
					<Stack ml={109} mt={140}>
						<Text fz={16} style={{ color: "#E4E8ED" }}>
							GET IN TOUCH
						</Text>
						<Text fz={32} style={{ color: "#FFFFFF" }}>
							Interested in something?
						</Text>
						<Text fz={16} style={{ color: "#E4E8ED" }} w={601}>
							Please get in touch below if you have a product enquiry or would like to know more
							information
						</Text>

						<SimpleGrid cols={2} mt={"xl"}>
							<TextInput
								w={288}
								variant="filled"
								styles={{
									input: {
										background: "black",
										borderColor: "#777",
										borderStyle: "solid",
									},
								}}
								label="Name"
								c={"#FFF"}
								radius={"xs"}
							/>
							<TextInput
								w={288}
								variant="filled"
								styles={{
									input: {
										background: "black",
										borderColor: "#777",
										borderStyle: "solid",
									},
								}}
								label="Company"
								c={"#FFF"}
								radius={"xs"}
							/>
						</SimpleGrid>
						<TextInput
							w={596}
							variant="filled"
							styles={{
								input: {
									background: "black",
									borderColor: "#777",
									borderStyle: "solid",
								},
							}}
							label="Email Address"
							c={"#FFF"}
							radius={"xs"}
						/>

						<SimpleGrid cols={2}>
							<TextInput
								w={288}
								variant="filled"
								styles={{
									input: {
										background: "black",
										borderColor: "#777",
										borderStyle: "solid",
									},
								}}
								label="Name"
								c={"#FFF"}
								radius={"xs"}
							/>
							<TextInput
								w={288}
								variant="filled"
								styles={{
									input: {
										background: "black",
										borderColor: "#777",
										borderStyle: "solid",
									},
								}}
								label="Company"
								radius={"xs"}
								c={"#FFF"}
							/>
						</SimpleGrid>
						<Textarea
							w={596}
							variant="filled"
							styles={{
								input: {
									background: "black",
									borderColor: "#777",
									borderStyle: "solid",
								},
							}}
							label="Message"
							radius={"xs"}
							c={"#FFF"}
						/>
						<Stack align="flex-end">
							<PrimaryButton w={138}> SEND</PrimaryButton>
						</Stack>
					</Stack>

					<Stack>
						<Box w="100%">
							<Divider size="md" ml={123} mt={172} w={300} />
							<Text size={"32px"} ml={123} mt={8} style={{ color: "#F6F6F6" }}>
								Useful Information
							</Text>
							<Text fz={20} ml={123} mt={35} style={{ color: "#F6F6F6" }}>
								Statutory Details:
							</Text>
							<Text fz={16} ml={123} mt={22} style={{ color: "#E4E8ED" }}>
								GST No : 27AABCL1732A1Z5
							</Text>
							<Text fz={16} ml={123} mt={22} style={{ color: "#E4E8ED" }}>
								CIN No : U31909MH2006PTC159638
							</Text>
							<Text fz={20} ml={123} mt={35} style={{ color: "#F6F6F6" }}>
								Address :
							</Text>
							<Text fz={16} ml={123} mt={22} w={488} style={{ color: "#E4E8ED" }}>
								401-403, Diamond Industrial Estate, Ketkipada Road, Dahisar (East), Mumbai 400068,
								Maharashtra, India.
							</Text>
							<Text fz={20} ml={123} mt={22} style={{ color: "#F6F6F6" }}>
								Contact Us:
							</Text>
							<Text fz={16} ml={123} mt={35} style={{ color: "#E4E8ED" }}>
								Email: enquiry@libratherm.com, libratherm@libratherm.com
							</Text>
							<Text fz={16} ml={123} style={{ color: "#E4E8ED" }}>
								Landline: +91-22-42555334
							</Text>
							<Text fz={20} ml={123} mt={22} style={{ color: "#F6F6F6" }}>
								Mobile:
							</Text>
							<Text fz={16} ml={123} mt={22} style={{ color: "#E4E8ED" }}>
								Customer Care : +91-8104971152
							</Text>
							<Text fz={16} ml={123} style={{ color: "#E4E8ED" }}>
								Sales : +91-8104971154
							</Text>
							<Text fz={16} ml={123} style={{ color: "#E4E8ED" }}>
								Marketing : +91-9082687279
							</Text>
						</Box>
					</Stack>
				</Group>
			</Paper>
			{/* </MantineProvider> */}
		</Paper>
	);
};

export default ContactUs;

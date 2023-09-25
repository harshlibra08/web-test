import {
	Paper,
	Container,
	MantineProvider,
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
				"&:hover": {
					backgroundColor: "#f4f4f4",
					color: "#555459",
				},
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
		<Paper w={1440} h={2141} withBorder>
			<Container>
				<Text color="#262728" size={16} weight={600} mt={77} align="center">
					LETS CONNECT
				</Text>
				<Text color="#262728" size={32} weight={600} mt={18} align="center">
					Get in touch with us
				</Text>
			</Container>
			<Text color="#555459" w={720} size={16} weight={400} mt={18} ml={337}>
				Libratherm is an innovation-driven manufacturer of Process Control Instruments and Systems
				since 1991. We cater to a wide range of industries, by providing accurate measurement,
				precise control
			</Text>
			<MantineProvider
				theme={{
					colorScheme: "dark",
				}}
			>
				<Paper w={1440} h={1236} withBorder bg={"black"} mt={77}>
					<Group>
						<Stack ml={109} mt={140}>
							<Text size={16} color="#E4E8ED">
								GET IN TOUCH
							</Text>
							<Text size={32} color="#FFF">
								Interested in something?
							</Text>
							<Text size={16} color="#E4E8ED" w={601}>
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
							/>
							<Stack align="flex-end">
								<PrimaryButton w={138}> SEND</PrimaryButton>
							</Stack>
						</Stack>

						<Stack>
							<Box w="100%">
								<Divider size="md" ml={123} mt={180} w={300} />
								<Text size={"32px"} ml={123} mt={6} color="#F6F6F6">
									Useful Information
								</Text>
								<Text size={"20px"} ml={123} mt={35} color="#F6F6F6">
									Statutory Details:
								</Text>
								<Text size={"16px"} ml={123} mt={22} color="#E4E8ED">
									GST No : 27AABCL1732A1Z5
								</Text>
								<Text size={"16px"} ml={123} mt={22} color="#E4E8ED">
									CIN No : U31909MH2006PTC159638
								</Text>
								<Text size={"20px"} ml={123} mt={35} color="#F6F6F6">
									Address :
								</Text>
								<Text size={"16px"} ml={123} mt={22} w={488} color="#E4E8ED">
									401-403, Diamond Industrial Estate, Ketkipada Road, Dahisar (East), Mumbai 400068,
									Maharashtra, India.
								</Text>
								<Text size={"20px"} ml={123} mt={22} color="#F6F6F6">
									Contact Us:
								</Text>
								<Text size={"16px"} ml={123} mt={35} color="#E4E8ED">
									Email: enquiry@libratherm.com, libratherm@libratherm.com
								</Text>
								<Text size={"16px"} ml={123} color="#E4E8ED">
									Landline: +91-22-42555334
								</Text>
								<Text size={"20px"} ml={123} mt={22} color="#F6F6F6">
									Mobile:
								</Text>
								<Text size={"16px"} ml={123} mt={22} color="#E4E8ED">
									Customer Care : +91-8104971152
								</Text>
								<Text size={"16px"} ml={123} color="#E4E8ED">
									Sales : +91-8104971154
								</Text>
								<Text size={"16px"} ml={123} color="#E4E8ED">
									Marketing : +91-9082687279
								</Text>
							</Box>
						</Stack>
					</Group>
				</Paper>
			</MantineProvider>
		</Paper>
	);
};

export default ContactUs;

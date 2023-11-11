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
	Grid,
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
		<>
			<Paper w={{ base: 360 }} h={{ base: 1641 }}>
				<Text c={"#262728"} fz={{ base: 10 }} fw={600} mt={{ base: 56 }} ml={{ base: 143 }}>
					WORK WITH US
				</Text>
				<Text c={"#262728"} fz={{ base: 20 }} fw={600} mt={{ base: 8 }} ml={{ base: 112 }}>
					Professionally{" "}
				</Text>

				<Text
					c={"#555459"}
					w={{ base: 328 }}
					fz={{ base: 12 }}
					fw={400}
					mt={{ base: 16 }}
					ml={{ base: 16 }}
					ta={"justify"}
				>
					Libratherm is an innovation-driven manufacturer of Process Control Instruments and Systems
					since 1991. We cater to a wide range of industries, by providing accurate measurement,
					precise control
				</Text>

				<Paper w={{ base: 360 }} h={{ base: 1400 }} bg={"black"} mt={{ base: 77 }}>
					<Grid>
						<Grid.Col span={{ base: 12 }}>
							<Stack ml={{ base: 16 }} pt={{ base: 28 }} maw={360}>
								<Text fz={{ base: 10 }} c={"#e4e8ed"}>
									GET IN TOUCH
								</Text>
								<Text fz={{ base: 20 }} c={"#ffffff"}>
									Interested in something?
								</Text>
								<Text fz={{ base: 12 }} c={"#e4e8ed"} w={{ base: 328 }}>
									Please get in touch below if you have a product enquiry or would like to know more
									information
								</Text>

								<TextInput
									w={{ base: 326 }}
									variant="filled"
									styles={{
										input: {
											background: "black",
											borderColor: "#777",
											height: 31,
											borderStyle: "solid",
										},
									}}
									label="Name"
									c={"#FFF"}
									radius={"xs"}
								/>
								<TextInput
									w={{ base: 326 }}
									variant="filled"
									styles={{
										input: {
											height: 31,
											background: "black",
											borderColor: "#777",
											borderStyle: "solid",
										},
									}}
									label="Company"
									c={"#FFF"}
									radius={"xs"}
								/>

								<TextInput
									w={{ base: 326 }}
									variant="filled"
									styles={{
										input: {
											height: 31,
											background: "black",
											borderColor: "#777",
											borderStyle: "solid",
										},
									}}
									label="Email Address"
									c={"#FFF"}
									radius={"xs"}
								/>

								<TextInput
									w={{ base: 326 }}
									variant="filled"
									styles={{
										input: {
											height: 31,
											background: "black",
											borderColor: "#777",
											borderStyle: "solid",
										},
									}}
									label="Phone Number"
									c={"#FFF"}
									radius={"xs"}
								/>
								<TextInput
									w={{ base: 326 }}
									variant="filled"
									styles={{
										input: {
											height: 31,
											background: "black",
											borderColor: "#777",
											borderStyle: "solid",
										},
									}}
									label="Country"
									radius={"xs"}
									c={"#FFF"}
								/>

								<Textarea
									w={{ base: 326 }}
									variant="filled"
									styles={{
										input: {
											height: 93,
											background: "black",
											borderColor: "#777",
											borderStyle: "solid",
										},
									}}
									label="Message"
									radius={"xs"}
									c={"#FFF"}
								/>

								<PrimaryButton ml={{ base: 186 }} w={{ base: 138 }}>
									SEND
								</PrimaryButton>
							</Stack>
						</Grid.Col>
						<Grid.Col span={{ base: 12 }}>
							<Stack ml={{ base: 16 }} w={{ base: 323 }}>
								<Divider size="md" mt={64} w={{ base: 334 }} />
								<Text fz={{ base: 20 }} mt={{ base: 32 }} c={"#f6f6f6"}>
									Useful Information
								</Text>
								<Text fz={{ base: 12 }} c={"#f6f6f6"}>
									Statutory Details:
								</Text>
								<Text fz={{ base: 12 }} c={"#e4e8ed"}>
									GST No : 27AABCL1732A1Z5
								</Text>
								<Text fz={{ base: 12 }} c={"#e4e8ed"}>
									CIN No : U31909MH2006PTC159638
								</Text>
								<Text fz={{ base: 12 }} c={"#f6f6f6"}>
									Address :
								</Text>
								<Text fz={{ base: 12 }} c={"#e4e8ed"}>
									401-403, Diamond Industrial Estate, Ketkipada Road, Dahisar (East), Mumbai 400068,
									Maharashtra, India.
								</Text>
								<Text fz={{ base: 12 }} c={"#f6f6f6"}>
									Contact Us:
								</Text>
								<Text fz={{ base: 12 }} c={"#e4e8ed"}>
									Email: enquiry@libratherm.com, libratherm@libratherm.com
								</Text>
								<Text fz={{ base: 12 }} c={"#e4e8ed"}>
									Landline: +91-22-42555334
								</Text>
								<Text fz={{ base: 12 }} mt={22} c={"#f6f6f6"}>
									Mobile:
								</Text>
								<Text fz={{ base: 12 }} c={"#e4e8ed"}>
									Customer Care : +91-8104971152
								</Text>
								<Text fz={{ base: 12 }} c={"#e4e8ed"}>
									Sales : +91-8104971154
								</Text>
								<Text fz={{ base: 12 }} c={"#e4e8ed"}>
									Marketing : +91-9082687279
								</Text>
							</Stack>
						</Grid.Col>
					</Grid>
				</Paper>
			</Paper>
			{/**Moble View */}
			{/* <Paper w={360} h={1541} hiddenFrom="xs">
				<Text c={"#262728"} fz={{base:10}} fw={600} mt={{base:56}} ml={{base:143}}>
					WORK WITH US
				</Text>
				<Text c={"#262728"} fz={{base:20}} fw={600} mt={{base:8}} ml={{base:112}}>
					Professionally{" "}
				</Text>

				<Text c={"#555459"} w={{base:328}} fz={{base:12}} fw={400} mt={{base:16}} ml={{base:16}} ta={"justify"}>
					Libratherm is an innovation-driven manufacturer of Process Control Instruments and Systems
					since 1991. We cater to a wide range of industries, by providing accurate measurement,
					precise control
				</Text>

				<Paper w={360} h={1636} bg={"black"} mt={{base:77}} hiddenFrom="xs">
					<Stack ml={{base:16}} pt={{base:28}} maw={360}>
						<Text fz={{base:10}} c={"#e4e8ed"}>
							GET IN TOUCH
						</Text>
						<Text fz={{base:20}} c={"#ffffff"}>
							Interested in something?
						</Text>
						<Text fz={{base:12}} c={"#e4e8ed"} w={{base:328}}>
							Please get in touch below if you have a product enquiry or would like to know more
							information
						</Text>

						<TextInput
							w={{base:326}}
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
							w={{base:326}}
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

						<TextInput
							w={{base:326}}
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

						<TextInput
							w={{base:326}}
							variant="filled"
							styles={{
								input: {
									background: "black",
									borderColor: "#777",
									borderStyle: "solid",
								},
							}}
							label="Phone Number"
							c={"#FFF"}
							radius={"xs"}
						/>
						<TextInput
							w={{base:326}}
							variant="filled"
							styles={{
								input: {
									background: "black",
									borderColor: "#777",
									borderStyle: "solid",
								},
							}}
							label="Country"
							radius={"xs"}
							c={"#FFF"}
						/>

						<Textarea
							w={{base:326}}
							h={93}
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

						<PrimaryButton ml={{base:186}} w={{base:138}}>
							SEND
						</PrimaryButton>
					</Stack>

					<Stack ml={{base:16}} w={{base:323}}>
						<Divider size="md" mt={64} w={{base:334}} />
						<Text fz={{base:20}} mt={{base:32}} c={"#f6f6f6"}>
							Useful Information
						</Text>
						<Text fz={{base:12}} c={"#f6f6f6"}>
							Statutory Details:
						</Text>
						<Text fz={{base:12}} c={"#e4e8ed"}>
							GST No : 27AABCL1732A1Z5
						</Text>
						<Text fz={{base:12}} c={"#e4e8ed"}>
							CIN No : U31909MH2006PTC159638
						</Text>
						<Text fz={{base:12}} c={"#f6f6f6"}>
							Address :
						</Text>
						<Text fz={{base:12}} c={"#e4e8ed"}>
							401-403, Diamond Industrial Estate, Ketkipada Road, Dahisar (East), Mumbai 400068,
							Maharashtra, India.
						</Text>
						<Text fz={{base:12}} c={"#f6f6f6"}>
							Contact Us:
						</Text>
						<Text fz={{base:12}} c={"#e4e8ed"}>
							Email: enquiry@libratherm.com, libratherm@libratherm.com
						</Text>
						<Text fz={{base:12}} c={"#e4e8ed"}>
							Landline: +91-22-42555334
						</Text>
						<Text fz={{base:12}} mt={22} c={"#f6f6f6"}>
							Mobile:
						</Text>
						<Text fz={{base:12}} c={"#e4e8ed"}>
							Customer Care : +91-8104971152
						</Text>
						<Text fz={{base:12}} c={"#e4e8ed"}>
							Sales : +91-8104971154
						</Text>
						<Text fz={{base:12}} c={"#e4e8ed"}>
							Marketing : +91-9082687279
						</Text>
					</Stack>
				</Paper>
			</Paper> */}

			{/**Tablet */}
			{/* <Paper w={768} h={1841} visibleFrom="xs" hiddenFrom="md">
				<Container>
					<Text c={"#262728"} fz={16} fw={600} mt={{base:77}} ta="center">
						LETS CONNECT
					</Text>
					<Text c={"#262728"} fz={32} fw={600} mt={18} ta="center">
						Get in touch with us
					</Text>
				</Container>
				<Text c={"#555459"} w={588} fz={16} fw={400} mt={18} ml={90}>
					Libratherm is an innovation-driven manufacturer of Process Control Instruments and Systems
					since 1991. We cater to a wide range of industries, by providing accurate measurement,
					precise control
				</Text>

				<Paper w={768} h={1436} bg={"black"} visibleFrom="xs" mt={40}>
					<Stack ml={90} pt={70}>
						<Text fz={16} c={"#e4e8ed"}>
							GET IN TOUCH
						</Text>
						<Text fz={32} c={"#ffffff"}>
							Interested in something?
						</Text>
						<Text fz={16} c={"#e4e8ed"} w={601}>
							Please get in touch below if you have a product enquiry or would like to know more
							information
						</Text>

						<Group>
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
						</Group>

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
						<Group>
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
						</Group>

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
							<PrimaryButton w={{base:138}} mr={90}>
								{" "}
								SEND
							</PrimaryButton>
						</Stack>
					</Stack>

					<Stack ml={90} gap={0}>
						<Divider size="md" mt={40} w={588} />
						<Text size={"32px"} c={"#f6f6f6"} mt={{base:8}}>
							Useful Information
						</Text>
						<Text fz={{base:20}} c={"#f6f6f6"} mt={35}>
							Statutory Details:
						</Text>
						<Text fz={16} c={"#e4e8ed"} mt={20}>
							GST No : 27AABCL1732A1Z5
						</Text>
						<Text fz={16} c={"#e4e8ed"} mt={15}>
							CIN No : U31909MH2006PTC159638
						</Text>
						<Text fz={{base:20}} c={"#f6f6f6"} mt={35}>
							Address :
						</Text>
						<Text fz={16} w={488} c={"#e4e8ed"} mt={20}>
							401-403, Diamond Industrial Estate, Ketkipada Road, Dahisar (East), Mumbai 400068,
							Maharashtra, India.
						</Text>
						<Text fz={{base:20}} c={"#f6f6f6"} mt={35}>
							Contact Us:
						</Text>
						<Text fz={16} c={"#e4e8ed"} mt={20}>
							Email: enquiry@libratherm.com, libratherm@libratherm.com
						</Text>
						<Text fz={16} c={"#e4e8ed"} mt={10}>
							Landline: +91-22-42555334
						</Text>
						<Text fz={{base:20}} c={"#f6f6f6"} mt={35}>
							Mobile:
						</Text>
						<Text fz={16} c={"#e4e8ed"} mt={20}>
							Customer Care : +91-8104971152
						</Text>
						<Text fz={16} c={"#e4e8ed"} mt={10}>
							Sales : +91-8104971154
						</Text>
						<Text fz={16} c={"#e4e8ed"} mt={10}>
							Marketing : +91-9082687279
						</Text>
					</Stack>
				</Paper>
			</Paper> */}
		</>
	);
};

export default ContactUs;

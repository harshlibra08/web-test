import {
	Box,
	Checkbox,
	Divider,
	Grid,
	Group,
	Paper,
	Stack,
	Text,
	TextInput,
	Textarea,
	UnstyledButton,
	Image,
} from "@mantine/core";
import React from "react";
import Paypal from "./Assets/paypal.png";
import { OptionsButton } from "./BaseApp/App";
type Props = {};

const Checkout = (props: Props) => {
	return (
		<>
			<Paper w={{ base: 360, lg: 1440 }} h={{ lg: 1500, base: 2500 }}>
				<Text
					fz={{ lg: 34, base: 20 }}
					fw={600}
					c={"#262728"}
					mt={{ lg: 123, base: 75 }}
					ml={{ lg: 114, base: 16 }}
				>
					Checkout
				</Text>
				<Divider
					size={"md"}
					color="#777"
					ml={{ base: 16, lg: 114 }}
					w={{ base: 328, lg: 1212 }}
					mt={24}
				></Divider>
				<Box bg={"#F8F9FA"} ml={{ base: 16, lg: 114 }} w={{ base: 328, lg: 1212 }}>
					<Group gap={0}>
						<Text fz={12} mx={16} my={16}>
							Returning Customer?{" "}
						</Text>
						<UnstyledButton>
							<Text fz={12}>Click here to login</Text>
						</UnstyledButton>
					</Group>
				</Box>
				<Divider
					size={"md"}
					color="#777"
					ml={{ base: 16, lg: 114 }}
					w={{ base: 328, lg: 1212 }}
					mt={24}
				></Divider>
				<Box bg={"#F8F9FA"} ml={{ base: 16, lg: 114 }} w={{ base: 328, lg: 1212 }}>
					<Group gap={0}>
						<Text fz={12} mx={16} my={16}>
							Have a coupon?
						</Text>
						<UnstyledButton>
							<Text fz={12}>Click here to enter your code</Text>
						</UnstyledButton>
					</Group>
				</Box>

				<Grid mt={32} ml={{ lg: 114, base: 16 }}>
					<Grid.Col span={{ base: 12, lg: 6 }}>
						<Paper w={{ lg: 670, base: 328 }} h={1172} withBorder>
							<Text fz={{ base: 14, lg: 16 }} fw={600} ml={16} mt={16} c={"#555459"}>
								Personal Details
							</Text>
							<Stack>
								<Group gap={24} mt={20} ml={16}>
									<TextInput placeholder="First Name*" w={{ base: 296, lg: 307 }}></TextInput>
									<TextInput placeholder="Last Name*" w={{ base: 296, lg: 307 }}></TextInput>
								</Group>
								<TextInput
									placeholder="Company Name (Optional)"
									w={{ lg: 638, base: 296 }}
									ml={16}
								></TextInput>
								<TextInput placeholder="Country" w={{ lg: 638, base: 296 }} ml={16}></TextInput>
							</Stack>
							<Text fz={16} fw={600} ml={16} mt={32} c={"#555459"}>
								Address
							</Text>
							<Stack>
								<TextInput
									placeholder="House number and street name"
									w={{ lg: 638, base: 296 }}
									ml={16}
									mt={20}
								></TextInput>
								<TextInput
									placeholder="Apartment, suite, unit etc (optional)"
									w={{ lg: 638, base: 296 }}
									ml={16}
								></TextInput>
								<TextInput
									placeholder="Town / City*"
									w={{ lg: 638, base: 296 }}
									ml={16}
								></TextInput>
								<TextInput
									placeholder="State / County*"
									w={{ lg: 638, base: 296 }}
									ml={16}
								></TextInput>
								<TextInput
									placeholder="Postal / Zip Code*"
									w={{ lg: 638, base: 296 }}
									ml={16}
								></TextInput>
							</Stack>
							<Text fz={16} fw={600} ml={16} mt={32} c={"#555459"}>
								Contact Details{" "}
							</Text>
							<Stack>
								<TextInput
									placeholder="Phone*"
									w={{ lg: 638, base: 296 }}
									ml={16}
									mt={20}
								></TextInput>
								<TextInput
									placeholder="Email Address*"
									w={{ lg: 638, base: 296 }}
									ml={16}
								></TextInput>
								<TextInput
									placeholder="gst (optional)"
									w={{ lg: 638, base: 296 }}
									ml={16}
								></TextInput>
							</Stack>
							<Text fz={16} fw={600} ml={16} mt={32} c={"#555459"}>
								Account Details
							</Text>
							<Stack>
								<TextInput
									placeholder="User Name*"
									w={{ lg: 638, base: 296 }}
									ml={16}
									mt={20}
								></TextInput>
								<TextInput
									placeholder="Create Password**"
									w={{ lg: 638, base: 296 }}
									ml={16}
								></TextInput>
								<Checkbox mt={24} label="Ship to a different address?" radius="xs" ml={16} />
								<Textarea
									ml={16}
									mr={16}
									mt={40}
									variant="filled"
									placeholder="Order notes (Optional)"
								/>
							</Stack>
						</Paper>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 6 }}>
						<Paper w={{ base: 328, lg: 478 }} h={784} bg={"#F4F4F4"} ml={{ lg: 64 }}>
							<Stack>
								<Text
									fz={{ lg: 16, base: 14 }}
									fw={600}
									ml={{ lg: 24, base: 16 }}
									mt={{ lg: 24, base: 16 }}
								>
									Your Order
								</Text>
								<Group justify="space-between">
									<Text fz={{ lg: 14, base: 12 }} fw={600} c={"#3e3e3e"} ml={{ lg: 24, base: 16 }}>
										Portable Thermometer - DTM-21 X1{" "}
									</Text>
									<Text fz={{ lg: 14, base: 12 }} mr={24}>
										₹ 4,463
									</Text>
								</Group>
								<Text fz={12} fw={600} ml={{ lg: 24, base: 16 }}>
									Select Part: 1001-1
								</Text>
								<Text fz={12} fw={600} ml={{ lg: 24, base: 16 }}>
									Select Probe: 1013
								</Text>
								<Divider size={"sm"} mx={24}></Divider>

								<Group justify="space-between">
									<Text fz={{ lg: 14, base: 12 }} fw={600} c={"#3e3e3e"} ml={{ lg: 24, base: 16 }}>
										Portable Thermometer - DTM-21 X1{" "}
									</Text>
									<Text fz={{ lg: 14, base: 12 }} mr={24}>
										₹ 4,463
									</Text>
								</Group>
								<Text fz={12} fw={600} ml={{ lg: 24, base: 16 }}>
									Select Part: 1001-1
								</Text>
								<Text fz={12} fw={600} ml={{ lg: 24, base: 16 }}>
									Select Probe: 1013
								</Text>
								<Divider size={"sm"} mx={24}></Divider>
								<Group justify="space-between">
									<Text fz={{ lg: 14, base: 12 }} fw={600} ml={{ lg: 24, base: 16 }} c={"#616161"}>
										Subtotal:
									</Text>
									<Text fz={{ lg: 14, base: 12 }} mr={24}>
										₹ 4,463
									</Text>
								</Group>
								<Divider size={"sm"} mx={24}></Divider>
								<Group justify="space-between">
									<Text fz={{ lg: 14, base: 12 }} fw={600} ml={{ lg: 24, base: 16 }} c={"#616161"}>
										Shipping:{" "}
									</Text>
									<Text fz={{ lg: 14, base: 12 }} mr={24}>
										₹ 446
									</Text>
								</Group>
								<Divider size={"sm"} mx={24}></Divider>
								<Group justify="space-between">
									<Text fz={{ lg: 16, base: 14 }} fw={600} ml={{ lg: 24, base: 16 }}>
										Total Amount
									</Text>
									<Text fz={{ lg: 16, base: 14 }} mr={24} fw={700}>
										₹ 446
									</Text>
								</Group>
								<Paper
									withBorder
									radius={"md"}
									w={{ lg: 430, base: 296 }}
									h={{ lg: 92, base: 102 }}
									mx={{ lg: 24, base: 16 }}
									bg={"#F4F4F4"}
									style={{ borderColor: "#02486B" }}
								>
									<Group>
										<Image src={Paypal} w={27} h={38} ml={9.4} mt={8.8} />
										<Stack gap={0}>
											<Text fz={12} fw={600}>
												Pay by Razorpay
											</Text>
											<Text fz={12} fw={400} c={"#828282"}>
												Cards. Nonbanking, Wallet & UPI
											</Text>
										</Stack>
									</Group>
									<Text
										fz={11}
										c={"#555459"}
										fw={400}
										w={{ lg: 412, base: 269 }}
										ml={{ lg: 8, base: 16 }}
										mt={11}
									>
										Pay securely by Credit or Debit Card or Internet banking through Rzorpay.
									</Text>
								</Paper>
								<Text fz={12} ml={{ lg: 24, base: 16 }} c={"#555459"}>
									Your personal data will be used to process your order, support your experience
									throughout this website, and for other purposes described in our privacy policy.
								</Text>
								<Checkbox
									variant=""
									label="I have read and agree to the website terms and conditions *"
									radius="xs"
									ml={{ lg: 24, base: 16 }}
								/>
							</Stack>
							<Stack align="stretch" ml={16} mr={16}>
								<OptionsButton mt={18} tt={"uppercase"}>
									<Text c="#fff" size="xs" fw={600}>
										place order
									</Text>
								</OptionsButton>
								<UnstyledButton tt={"uppercase"}>
									<Text c="#3e3e3e" size="xs" fw={600} ta={"center"}>
										return to cart
									</Text>
								</UnstyledButton>
							</Stack>
						</Paper>
					</Grid.Col>
				</Grid>
			</Paper>
			{/**MOBILE VIEW */}
			{/* <Paper w={360} h={1500} hiddenFrom="xs">
				<Text fz={20} fw={600} c={"#262728"} mt={24} ml={16}>
					Checkout
				</Text>
				<Divider size={"md"} color="#777" ml={16} w={328} mt={24}></Divider>
				<Box bg={"#F8F9FA"} ml={16} w={328}>
					<Group gap={0}>
						<Text fz={12} mx={16} my={16}>
							Returning Customer?{" "}
						</Text>
						<UnstyledButton>
							<Text fz={12}>Click here to login</Text>
						</UnstyledButton>
					</Group>
				</Box>
				<Divider size={"md"} color="#777" ml={16} w={328} mt={24}></Divider>
				<Box bg={"#F8F9FA"} ml={16} w={328}>
					<Group gap={0}>
						<Text fz={12} mx={16} my={16}>
							Have a coupon?
						</Text>
						<UnstyledButton>
							<Text fz={12}>Click here to enter your code</Text>
						</UnstyledButton>
					</Group>
				</Box>

				<Paper w={328} h={1100} withBorder mx={16} mt={40}>
					<Stack gap={0}>
						<Text fz={{ lg: 14, base: 12 }} fw={600} c={"#555459"} ml={16} mt={16}>
							Personal Details
						</Text>
						<TextInput placeholder="First Name*" w={296} ml={16} mt={16}></TextInput>
						<TextInput placeholder="Last Name*" w={296} ml={16} mt={16}></TextInput>
						<TextInput placeholder="Company Name (Optional)" w={296} ml={16} mt={16}></TextInput>
						<TextInput placeholder="Country" w={296} ml={16} mt={16}></TextInput>
						<Text fz={{ lg: 14, base: 12 }} fw={600} ml={16} mt={32} c={"#555459"}>
							Address
						</Text>
						<TextInput
							placeholder="House number and street name"
							w={296}
							ml={16}
							mt={16}
						></TextInput>
						<TextInput
							placeholder="Apartment, suite, unit etc (optional)"
							w={296}
							ml={16}
							mt={16}
						></TextInput>
						<TextInput placeholder="Town / City*" w={296} ml={16} mt={16}></TextInput>
						<TextInput placeholder="State / County*" w={296} ml={16} mt={16}></TextInput>
						<TextInput placeholder="Postal / Zip Code*" w={296} ml={16} mt={16}></TextInput>
						<Text fz={{ lg: 14, base: 12 }} fw={600} ml={16} mt={32} c={"#555459"}>
							Contact Details
						</Text>
						<TextInput placeholder="Phone*" w={296} ml={16} mt={16}></TextInput>
						<TextInput placeholder="Email Address*" w={296} ml={16} mt={16}></TextInput>
						<TextInput placeholder="gst (optional)" w={296} ml={16} mt={16}></TextInput>
						<Text fz={{ lg: 14, base: 12 }} fw={600} ml={16} mt={32} c={"#555459"}>
							Account Details
						</Text>
						<TextInput placeholder="User Name*" w={296} ml={16} mt={16}></TextInput>
						<TextInput placeholder="Create Password**" w={296} ml={16} mt={16}></TextInput>
						<Checkbox mt={34} label="Ship to a different address?" radius="xs" ml={16} />
						<Textarea
							w={296}
							ml={16}
							mt={27}
							variant="filled"
							placeholder="Order notes (Optional)"
						/>
					</Stack>
				</Paper>

				<Paper w={328} h={800} bg={"#F4F4F4"} mt={40} mx={16}>
					<Stack>
						<Text fz={{ lg: 14, base: 12 }} fw={600} ml={16} mt={16}>
							Your Order
						</Text>
						<Group>
							<Text fz={12} fw={600} c={"#3e3e3e"} ml={16}>
								Portable Thermometer - DTM-21 X1{" "}
							</Text>
							<Text fz={12} ml={20} c={"#3e3e3e"} fw={600}>
								₹ 4,463
							</Text>
						</Group>
						<Text fz={12} fw={600} ml={16}>
							Select Part: 1001-1
						</Text>
						<Text fz={12} fw={600} ml={16}>
							Select Probe: 1013
						</Text>
						<Divider size={"sm"} mx={16}></Divider>

						<Group>
							<Text fz={12} fw={600} c={"#3e3e3e"} ml={16}>
								Portable Thermometer - DTM-21 X1{" "}
							</Text>
							<Text fz={12} c={"#3e3e3e"} fw={600} ml={20}>
								₹ 4,463
							</Text>
						</Group>
						<Text fz={12} fw={600} ml={16}>
							Select Part: 1001-1
						</Text>
						<Text fz={12} fw={600} ml={16}>
							Select Probe: 1013
						</Text>
						<Divider size={"sm"} mx={16}></Divider>
						<Group>
							<Text fz={12} fw={600} ml={16} c={"#616161"}>
								Subtotal:
							</Text>
							<Text fz={12} c={"#3e3e3e"} fw={600} ml={175}>
								₹ 4,463
							</Text>
						</Group>
						<Divider size={"sm"} mx={16}></Divider>
						<Group>
							<Text fz={12} fw={600} ml={16} c={"#616161"}>
								Shipping:
							</Text>
							<Text fz={12} c={"#3e3e3e"} fw={600} ml={175}>
								₹ 4463
							</Text>
						</Group>
						<Divider size={"sm"} mx={16}></Divider>
						<Group>
							<Text fz={16} fw={600} ml={16}>
								Total Amount
							</Text>
							<Text fz={16} c={"#3e3e3e"} fw={700} ml={115}>
								₹ 4463
							</Text>
						</Group>
						<Paper
							withBorder
							radius={"md"}
							w={296}
							h={102}
							mx={16}
							bg={"#F4F4F4"}
							style={{ borderColor: "#02486B" }}
						>
							<Group>
								<Image src={Paypal} w={27} h={38} ml={9.4} mt={12.8} />
								<Stack gap={0} mt={16}>
									<Text fz={12} fw={600} ml={5.5}>
										Pay by Razorpay
									</Text>
									<Text fz={12} fw={400} c={"#828282"} ml={5.5}>
										Cards. Nonbanking, Wallet & UPI
									</Text>
								</Stack>
							</Group>
							<Text fz={12} c={"#555459"} fw={400} ml={8} mt={8}>
								Pay securely by Credit or Debit Card or Internet banking through Rzorpay.
							</Text>
						</Paper>
						<Text fz={12} ml={16} c={"#555459"}>
							Your personal data will be used to process your order, support your experience
							throughout this website, and for other purposes described in our privacy policy.
						</Text>
						<Checkbox
							fz={12}
							variant=""
							label="I have read and agree to the website terms and conditions *"
							radius="xs"
							ml={16}
							styles={{
								label: {
									fontSize: 12,
									color: "#555459",
									fontWeight: 400,
								},
							}}
						/>
					</Stack>
					<Stack align="stretch" ml={16} mr={16}>
						<OptionsButton mt={18} tt={"uppercase"}>
							<Text c="#fff" size="xs" fw={600}>
								place order
							</Text>
						</OptionsButton>
						<UnstyledButton tt={"uppercase"}>
							<Text c="#3e3e3e" size="xs" fw={600} ta={"center"}>
								return to cart
							</Text>
						</UnstyledButton>
					</Stack>
				</Paper>
			</Paper> */}

			{/**Tablet */}
			{/* <Paper w={768} h={2300} visibleFrom="xs" hiddenFrom="md">
				<Text fz={32} fw={600} c={"#262728"} mt={123} ml={90}>
					Checkout
				</Text>
				<Divider size={"lg"} color="#777" w={588} mx={90} mt={26}></Divider>
				<Box bg={"#F8F9FA"} w={588} mx={90}>
					<Group gap={0}>
						<Text fz={12} mx={16} my={16}>
							Returning Customer?{" "}
						</Text>
						<UnstyledButton>
							<Text fz={12} td={"underline"}>
								Click here to login
							</Text>
						</UnstyledButton>
					</Group>
				</Box>
				<Divider size={"lg"} color="#777" mx={90} w={588} mt={24}></Divider>
				<Box bg={"#F8F9FA"} mx={90} w={588}>
					<Group gap={0}>
						<Text fz={12} mx={16} my={16}>
							Have a coupon?
						</Text>
						<UnstyledButton>
							<Text fz={12} td={"underline"}>
								Click here to enter your code
							</Text>
						</UnstyledButton>
					</Group>
				</Box>

				<Grid mt={32} ml={90}>
					<Grid.Col span={12}>
						<Paper w={588} h={1100} withBorder>
							<Text fz={16} fw={600} ml={16} mt={16} c={"#555459"}>
								Personal Details
							</Text>
							<Stack>
								<Group gap={24} mt={20} mx={16}>
									<TextInput placeholder="First Name*" w={260}></TextInput>
									<TextInput placeholder="Last Name*" w={260}></TextInput>
								</Group>
								<TextInput placeholder="Company Name (Optional)" w={544} ml={16}></TextInput>
								<TextInput placeholder="Country" w={544} ml={16}></TextInput>
							</Stack>
							<Text fz={16} fw={600} ml={16} mt={32} c={"#555459"}>
								Address
							</Text>
							<Stack>
								<TextInput
									placeholder="House number and street name"
									w={544}
									ml={16}
									mt={20}
								></TextInput>
								<TextInput
									placeholder="Apartment, suite, unit etc (optional)"
									w={544}
									ml={16}
								></TextInput>
								<TextInput placeholder="Town / City*" w={544} ml={16}></TextInput>
								<TextInput placeholder="State / County*" w={544} ml={16}></TextInput>
								<TextInput placeholder="Postal / Zip Code*" w={544} ml={16}></TextInput>
							</Stack>
							<Text fz={16} fw={600} ml={16} mt={32} c={"#555459"}>
								Contact Details{" "}
							</Text>
							<Stack>
								<TextInput placeholder="Phone*" w={544} ml={16} mt={20}></TextInput>
								<TextInput placeholder="Email Address*" w={544} ml={16}></TextInput>
								<TextInput placeholder="gst (optional)" w={544} ml={16}></TextInput>
							</Stack>
							<Text fz={16} fw={600} ml={16} mt={32} c={"#555459"}>
								Account Details
							</Text>
							<Stack>
								<TextInput placeholder="User Name*" w={544} ml={16} mt={20}></TextInput>
								<TextInput placeholder="Create Password**" w={544} ml={16}></TextInput>
								<Checkbox mt={24} label="Ship to a different address?" radius="xs" ml={16} />
								<Textarea
									ml={16}
									mr={16}
									mt={20}
									variant="filled"
									placeholder="Order notes (Optional)"
								/>
							</Stack>
						</Paper>
					</Grid.Col>
					<Grid.Col span={12}>
						<Paper w={588} h={784} bg={"#F4F4F4"}>
							<Stack>
								<Text fz={16} fw={600} ml={{ lg: 24, base: 16 }} mt={24}>
									Your Order
								</Text>
								<Group justify="space-between">
									<Text fz={{ lg: 14, base: 12 }} fw={600} c={"#3e3e3e"} ml={{ lg: 24, base: 16 }}>
										Portable Thermometer - DTM-21 X1{" "}
									</Text>
									<Text fz={{ lg: 14, base: 12 }} mr={24}>
										₹ 4,463
									</Text>
								</Group>
								<Text fz={12} fw={600} ml={{ lg: 24, base: 16 }}>
									Select Part: 1001-1
								</Text>
								<Text fz={12} fw={600} ml={{ lg: 24, base: 16 }}>
									Select Probe: 1013
								</Text>
								<Divider size={"sm"} mx={24}></Divider>

								<Group justify="space-between">
									<Text fz={{ lg: 14, base: 12 }} fw={600} c={"#3e3e3e"} ml={{ lg: 24, base: 16 }}>
										Portable Thermometer - DTM-21 X1{" "}
									</Text>
									<Text fz={{ lg: 14, base: 12 }} mr={24}>
										₹ 4,463
									</Text>
								</Group>
								<Text fz={12} fw={600} ml={{ lg: 24, base: 16 }}>
									Select Part: 1001-1
								</Text>
								<Text fz={12} fw={600} ml={{ lg: 24, base: 16 }}>
									Select Probe: 1013
								</Text>
								<Divider size={"sm"} mx={24}></Divider>
								<Group justify="space-between">
									<Text fz={{ lg: 14, base: 12 }} fw={600} ml={{ lg: 24, base: 16 }} c={"#616161"}>
										Subtotal:
									</Text>
									<Text fz={{ lg: 14, base: 12 }} mr={24}>
										₹ 4,463
									</Text>
								</Group>
								<Divider size={"sm"} mx={24}></Divider>
								<Group justify="space-between">
									<Text fz={{ lg: 14, base: 12 }} fw={600} ml={{ lg: 24, base: 16 }} c={"#616161"}>
										Shipping:{" "}
									</Text>
									<Text fz={{ lg: 14, base: 12 }} mr={24}>
										₹ 446
									</Text>
								</Group>
								<Divider size={"sm"} mx={24}></Divider>
								<Group justify="space-between">
									<Text fz={16} fw={600} ml={{ lg: 24, base: 16 }}>
										Total Amount
									</Text>
									<Text fz={16} mr={24} fw={700}>
										₹ 446
									</Text>
								</Group>
								<Paper
									withBorder
									radius={"md"}
									w={540}
									h={92}
									mx={24}
									bg={"#F4F4F4"}
									style={{ borderColor: "#02486B" }}
								>
									<Group>
										<Image src={Paypal} w={27} h={38} ml={9.4} mt={8.8} />
										<Stack gap={0}>
											<Text fz={12} fw={600}>
												Pay by Razorpay
											</Text>
											<Text fz={12} fw={400} c={"#828282"}>
												Cards. Nonbanking, Wallet & UPI
											</Text>
										</Stack>
									</Group>
									<Text fz={11} c={"#555459"} fw={400} w={412} ml={8} mt={11}>
										Pay securely by Credit or Debit Card or Internet banking through Rzorpay.
									</Text>
								</Paper>
								<Text fz={12} ml={{ lg: 24, base: 16 }} c={"#555459"}>
									Your personal data will be used to process your order, support your experience
									throughout this website, and for other purposes described in our privacy policy.
								</Text>
								<Checkbox
									variant=""
									label="I have read and agree to the website terms and conditions *"
									radius="xs"
									ml={{ lg: 24, base: 16 }}
								/>
							</Stack>
							<Stack align="stretch" ml={16} mr={16}>
								<OptionsButton mt={18} tt={"uppercase"}>
									<Text c="#fff" size="xs" fw={600}>
										place order
									</Text>
								</OptionsButton>
								<UnstyledButton tt={"uppercase"}>
									<Text c="#3e3e3e" size="xs" fw={600} ta={"center"}>
										return to cart
									</Text>
								</UnstyledButton>
							</Stack>
						</Paper>
					</Grid.Col>
				</Grid>
			</Paper> */}
		</>
	);
};

export default Checkout;

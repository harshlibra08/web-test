import {
	Paper,
	Box,
	Grid,
	Stack,
	UnstyledButton,
	Group,
	Divider,
	List,
	TextInput,
	Textarea,
	Text,
} from "@mantine/core";
import React from "react";
import { PrimaryButton } from "./BaseApp/App";

type Props = {};

const CareersPage = (props: Props) => {
	return (
		<>
			<Paper bg={"black"} w={{ lg: 1440, base: 360 }} h={{ lg: 439, base: 220 }} withBorder>
				<Box>
					<Text
						c="#F6F6F6"
						fz={{ lg: 16, base: 10 }}
						fw={600}
						mt={{ lg: 103, base: 56 }}
						ml={{ base: 143, lg: 660 }}
					>
						WORK WITH US
					</Text>
					<Text
						c="#F6F6F6"
						fz={{ lg: 32, base: 20 }}
						fw={600}
						my={{ lg: 18, base: 8 }}
						mx={{ base: 112, lg: 611 }}
					>
						Professionally
					</Text>
					<Text
						ta="justify"
						c="#E4E8ED"
						fz={{ lg: 16, base: 10 }}
						fw={400}
						mt={18}
						w={{ lg: 1006, base: 328 }}
						ml={{ lg: 217, base: 16 }}
						lineClamp={4}
					>
						Libratherm is a 31-year-old manufacturing company having specialization in the Core
						Electronics Field for the design, development and manufacturing of Industrial Process
						Control Instruments and Systems. Our customer base is across India and in some parts of
						the world. We are looking forward to hiring young, dynamic and enthusiastic candidates
						having the zeal to excel both personally and professionally. We give a pleasant work
						environment and ample opportunities to all our employees to learn, earn and grow in the
						area of their interest. We strongly believe in creating in India and making in India,
						with the passion to serve the global industries.
					</Text>
				</Box>
			</Paper>

			<Paper w={{ lg: 1440, base: 360 }} h={{ lg: 914, base: 1192 }}>
				<Grid ml={{ lg: 264, base: 16 }} mt={{ lg: 90, base: 40 }}>
					<Grid.Col span={{ base: 12, lg: 6 }}>
						<Stack>
							<Text c="#262728" fz={{ lg: 24, base: 16 }} fw={600}>
								Embedded Software Engineer
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton>
								<Text c="#292929" fz={{ lg: 16, base: 14 }} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 6 }}>
						<Stack>
							<Text c="#262728" fz={{ lg: 24, base: 16 }} fw={600}>
								Marketing Executive
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton>
								<Text c="#292929" fz={{ lg: 16, base: 14 }} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
					{/* </Grid> */}

					{/* <Grid ml={264} mt={90}> */}
					<Grid.Col span={{ base: 12, lg: 6 }}>
						<Stack mt={{ lg: 96, base: 56 }}>
							<Text c="#262728" fz={{ lg: 24, base: 16 }} fw={600}>
								Technical Sales Engineer
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton>
								<Text c="#292929" fz={{ lg: 16, base: 14 }} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 6 }}>
						<Stack mt={{ lg: 96, base: 56 }}>
							<Text c="#262728" fz={{ lg: 24, base: 16 }} fw={600}>
								Documentation Engineer
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={{ lg: 16, base: 14 }} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton>
								<Text c="#292929" fz={{ lg: 16, base: 14 }} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
				</Grid>
			</Paper>

			<Paper w={{ lg: 1440, base: 360 }} h={{ lg: 1940, base: 2000 }} mt={30} bg={"#000"}>
				<Grid>
					<Grid.Col span={{ lg: 6, base: 12 }}>
						<Stack>
							<Text
								fz={{ base: 20, lg: 32 }}
								ml={{ lg: 114, base: 16 }}
								mt={{ lg: 100, base: 59 }}
								c="#F6F6F6"
							>
								Embedded Software Engineer
							</Text>
							<Divider size={"md"} ml={{ lg: 114, base: 16 }} w={{ lg: 334, base: 328 }} />
							<Text fz={{ base: 14, lg: 18 }} ml={{ lg: 119, base: 16 }} mt={35} c="#E4E8ED">
								Job Description:{" "}
							</Text>
							<List mt={20} mx={{ lg: 119, base: 16 }} w={{ lg: 440, base: 328 }}>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Working on existing embedded firmware for upgrades & modifications
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Evaluating a project's firmware needs through client and team meetings{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Designing a firmware solution to meet project needs{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Debugging and testing of firmware to ensure error-free operation{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Evaluating performance and troubleshooting of embedded electronic systems{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Incorporating client feedback into firmware revisions{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Introducing new design techniques and incorporating best practices in firmware
									development{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Co-ordinating with the production department for continual improvement of the
									products under manufacturing{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Preparing required design drawings, diagrams, flowcharts & documentation{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Maintaining version control of firmware{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Updating project status and reporting to managers{" "}
								</List.Item>
							</List>
							<Text
								c="#E4E8ED"
								fz={{ lg: 18, base: 14 }}
								fw={600}
								ml={{ lg: 119, base: 16 }}
								mt={35}
							>
								Qualifications
							</Text>
							<List mt={20} ml={{ lg: 119, base: 16 }} w={{ lg: 440, base: 328 }}>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									B.E. / B.Tech (Electronics/ Instrumentation/ EXTC){" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									3 to 5 years{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Fresher with Project done in Academic may also be considered.{" "}
								</List.Item>
							</List>
							<Text
								c="#E4E8ED"
								fz={{ lg: 18, base: 14 }}
								fw={600}
								ml={{ lg: 119, base: 16 }}
								mt={35}
							>
								Required Skills{" "}
							</Text>
							<List mt={35} ml={{ lg: 119, base: 16 }} w={{ lg: 440, base: 328 }}>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									C, C++, Embedded C{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Expertise in Microcontrollers such as 8051, ARM Cortex-M(Architecture &
									Instruction Set){" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Expertise in SPI, I2C, UART communication{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Expertise in the interfacing of ADC, PMW, DAC & LCD{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Working knowledge of signal processing{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Working knowledge of communication protocols such as MODBUS (RTU), Ethernet TCP/IP
									on Cortex M4/M3.{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Working knowledge on IDEs such as KEIL, IAR Embedded Workbench, CUBEIDE, Eclipse,
									Arduino{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Working knowledge of various tools related to embedded development{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Basic knowledge in Hardware Testing & debugging{" "}
								</List.Item>
								<List.Item fz={{ lg: 18, base: 12 }} c={"#E4E8ED"}>
									Added advantage: Experience in RTOS framework and nomenclature.{" "}
								</List.Item>
							</List>
						</Stack>
					</Grid.Col>
					<Grid.Col span={{ lg: 6, base: 12 }}>
						<Stack ml={{ base: 16 }}>
							<Text fz={{ lg: 32, base: 20 }} c="#FFF" mt={54}>
								Come Join us
							</Text>

							<Text fz={{ lg: 16, base: 12 }} c="#E4E8ED" w={{ lg: 601, base: 328 }}>
								Please get in touch below if you have a product enquiry or would like to know more
								information
							</Text>

							<TextInput
								w={{ lg: 596, base: 326 }}
								variant="filled"
								c={"#FFFFFF"}
								styles={{
									input: {
										background: "black",
										borderColor: "#777",
										borderStyle: "solid",
										color: "#E4E8ED",
									},
								}}
								label="Name"
								radius={"xs"}
								withAsterisk
							/>
							<Group>
								<TextInput
									w={{ lg: 288, base: 326 }}
									variant="filled"
									c={"#FFFFFF"}
									styles={{
										input: {
											background: "black",
											borderColor: "#777",
											borderStyle: "solid",
										},
									}}
									label="Email Address"
									radius={"xs"}
									withAsterisk
								/>

								<TextInput
									w={{ lg: 288, base: 326 }}
									variant="filled"
									c={"#FFFFFF"}
									styles={{
										input: {
											background: "black",
											borderColor: "#777",
											borderStyle: "solid",
										},
									}}
									label="Phone Number"
									radius={"xs"}
									withAsterisk
								/>
							</Group>
							<TextInput
								w={{ lg: 596, base: 326 }}
								variant="filled"
								c={"#FFFFFF"}
								styles={{
									input: {
										background: "black",
										borderColor: "#777",
										borderStyle: "solid",
									},
								}}
								label="Applied For"
								radius={"xs"}
								withAsterisk
							/>
							<Textarea
								w={{ lg: 596, base: 326 }}
								variant="filled"
								c={"#FFFFFF"}
								styles={{
									input: {
										background: "black",
										borderColor: "#777",
										borderStyle: "solid",
										height: 93,
									},
								}}
								label="Resume"
								radius={"xs"}
								withAsterisk
								placeholder="Click or drag a file to this area to upload."
							/>

							<Stack align="end" mr={{ lg: 114, base: 17 }} mt={32}>
								<PrimaryButton w={138}>
									{" "}
									<Text c="#262728" fz={{ lg: 16, base: 10 }} fw={700}>
										SEND
									</Text>
								</PrimaryButton>
							</Stack>
						</Stack>
					</Grid.Col>
				</Grid>
			</Paper>

			{/**MOBILE VIEW */}
			{/* <Paper bg={"black"} w={360} h={220} withBorder mt={750} hiddenFrom="xs">
				<Box>
					<Text ta="center" c="#F6F6F6" fz={10} fw={600} mt={56}>
						WORK WITH US
					</Text>
					<Text ta="center" c="#F6F6F6" fz={20} fw={600} mt={8}>
						Professionally
					</Text>
					<Text ta="justify" c="#E4E8ED" fz={10} fw={400} mt={16} w={328} ml={16} lineClamp={3}>
						Libratherm is a 31-year-old manufacturing company having specialization in the Core
						Electronics Field for the design, development and manufacturing of Industrial Process
						Control Instruments and Systems. Our customer base is across India and in some parts of
						the world. We are looking forward to hiring young, dynamic and enthusiastic candidates
						having the zeal to excel both personally and professionally. We give a pleasant work
						environment and ample opportunities to all our employees to learn, earn and grow in the
						area of their interest. We strongly believe in creating in India and making in India,
						with the passion to serve the global industries.
					</Text>
				</Box>
			</Paper>
			<Paper w={360} h={914} hiddenFrom="xs">
				<Grid ml={16} mt={40}>
					<Grid.Col span={12}>
						<Stack gap={5}>
							<Text c="#262728" fz={{ lg: 16, base: 10 }} fw={600}>
								Embedded Software Engineer
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton mt={16}>
								<Text c="#292929" fz={{ lg: 16, base: 10 }} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
					<Grid.Col span={12} mt={40}>
						<Stack gap={5}>
							<Text c="#262728" fz={{ lg: 16, base: 10 }} fw={600}>
								Marketing Executive
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton mt={16}>
								<Text c="#292929" fz={{ lg: 16, base: 10 }} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
				</Grid>

				<Grid ml={16} mt={40}>
					<Grid.Col span={12}>
						<Stack gap={5}>
							<Text c="#262728" fz={{ lg: 16, base: 10 }} fw={600}>
								Technical Sales Engineer
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton mt={16}>
								<Text c="#292929" fz={{ lg: 16, base: 10 }} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
					<Grid.Col span={12} mt={40}>
						<Stack gap={5}>
							<Text c="#262728" fz={{ lg: 16, base: 10 }} fw={600}>
								Documentation Engineer
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={{ lg: 18, base: 12}} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton mt={16}>
								<Text c="#292929" fz={{ lg: 16, base: 10 }} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
				</Grid>
			</Paper>

			<Paper withBorder w={360} h={2440} mt={130} bg={"#000"} hiddenFrom="xs">
				<Text fz={20} ml={16} mt={59} c="#F6F6F6">
					Embedded Software Engineer
				</Text>
				<Divider size={"xs"} ml={16} mt={16} w={328} />
				<Grid>
					<Grid.Col span={12}>
						<Stack mx={16}>
							<Text fz={{ lg: 18, base: 12}} ml={16} fw={600} mt={35} c="#E4E8ED">
								Job Description:{" "}
							</Text>
							<List mt={10} w={320} lh={"160%"}>
								<List.Item fz={12} c={"#E4E8ED"}>
									Working on existing embedded firmware for upgrades & modifications
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Evaluating a project's firmware needs through client and team meetings{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Designing a firmware solution to meet project needs{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Debugging and testing of firmware to ensure error-free operation{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Evaluating performance and troubleshooting of embedded electronic systems{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Incorporating client feedback into firmware revisions{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Introducing new design techniques and incorporating best practices in firmware
									development{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Co-ordinating with the production department for continual improvement of the
									products under manufacturing{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Preparing required design drawings, diagrams, flowcharts & documentation{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Maintaining version control of firmware{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Updating project status and reporting to managers{" "}
								</List.Item>
							</List>
							<Text c="#E4E8ED" fz={{ lg: 16, base: 10 }} fw={600} ml={16} mt={35}>
								Qualifications
							</Text>
							<List mt={10} ml={16} w={320} lh={"160%"}>
								<List.Item fz={12} c={"#E4E8ED"}>
									B.E. / B.Tech (Electronics/ Instrumentation/ EXTC){" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									3 to 5 years{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Fresher with Project done in Academic may also be considered.{" "}
								</List.Item>
							</List>
							<Text c="#E4E8ED" fz={{ lg: 16, base: 10 }} fw={600} ml={16} mt={35}>
								Required Skills{" "}
							</Text>
							<List mt={10} ml={16} w={320} lh={"160%"}>
								<List.Item fz={12} c={"#E4E8ED"}>
									C, C++, Embedded C{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Expertise in Microcontrollers such as 8051, ARM Cortex-M(Architecture &
									Instruction Set){" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Expertise in SPI, I2C, UART communication{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Expertise in the interfacing of ADC, PMW, DAC & LCD{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Working knowledge of signal processing{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Working knowledge of communication protocols such as MODBUS (RTU), Ethernet TCP/IP
									on Cortex M4/M3.{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Working knowledge on IDEs such as KEIL, IAR Embedded Workbench, CUBEIDE, Eclipse,
									Arduino{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Working knowledge of various tools related to embedded development{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Basic knowledge in Hardware Testing & debugging{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Added advantage: Experience in RTOS framework and nomenclature.{" "}
								</List.Item>
							</List>
						</Stack>
					</Grid.Col>
					<Grid.Col span={12} ml={16}>
						<Stack>
							<Text fz={20} c="#FFF" mt={54}>
								Interested in something?{" "}
							</Text>

							<Text fz={12} c="#E4E8ED" w={328}>
								Please get in touch below if you have a product enquiry or would like to know more
								information
							</Text>

							<TextInput
								w={326}
								variant="filled"
								c={"#FFFFFF"}
								styles={{
									input: {
										background: "black",
										borderColor: "#777",
										borderStyle: "solid",
										color: "#E4E8ED",
									},
								}}
								label="Name"
								radius={"xs"}
								withAsterisk
							/>
							<Group>
								<TextInput
									w={326}
									variant="filled"
									c={"#FFFFFF"}
									styles={{
										input: {
											background: "black",
											borderColor: "#777",
											borderStyle: "solid",
										},
									}}
									label="Email Address"
									radius={"xs"}
									withAsterisk
								/>

								<TextInput
									w={326}
									variant="filled"
									c={"#FFFFFF"}
									styles={{
										input: {
											background: "black",
											borderColor: "#777",
											borderStyle: "solid",
										},
									}}
									label="Phone Number"
									radius={"xs"}
									withAsterisk
								/>
							</Group>
							<TextInput
								w={326}
								variant="filled"
								c={"#FFFFFF"}
								styles={{
									input: {
										background: "black",
										borderColor: "#777",
										borderStyle: "solid",
									},
								}}
								label="Applied For"
								radius={"xs"}
								withAsterisk
							/>
							<Textarea
								w={326}
								variant="filled"
								c={"#FFFFFF"}
								styles={{
									input: {
										background: "black",
										borderColor: "#777",
										borderStyle: "solid",
									},
								}}
								label="Resume"
								radius={"xs"}
								withAsterisk
								placeholder="Click or drag a file to this area to upload."
							/>

							<PrimaryButton w={138} mt={30} ml={185}>
								<Text c="#262728" fz={{ lg: 16, base: 10 }} fw={700}>
									SEND
								</Text>
							</PrimaryButton>
						</Stack>
					</Grid.Col>
				</Grid>
			</Paper> */}

			{/**Tablet */}
			{/* <Paper bg={"black"} w={768} h={439} mt={50} visibleFrom="xs" hiddenFrom="md">
				<Box pt={103}>
					<Text ta="center" c="#F6F6F6" fz={{ lg: 18, base: 12}} fw={600}>
						WORK WITH US
					</Text>
					<Text ta="center" c="#F6F6F6" mt={18} fz={28} fw={600}>
						Professionally
					</Text>
					<Text ta="justify" c="#E4E8ED" fz={12} mt={18} fw={400} w={588} ml={90}>
						Libratherm is a 31-year-old manufacturing company having specialization in the Core
						Electronics Field for the design, development and manufacturing of Industrial Process
						Control Instruments and Systems. Our customer base is across India and in some parts of
						the world. We are looking forward to hiring young, dynamic and enthusiastic candidates
						having the zeal to excel both personally and professionally. We give a pleasant work
						environment and ample opportunities to all our employees to learn, earn and grow in the
						area of their interest. We strongly believe in creating in India and making in India,
						with the passion to serve the global industries.
					</Text>
				</Box>
			</Paper>

			<Paper w={768} h={620} visibleFrom="xs" hiddenFrom="md">
				<Grid ml={90} mt={90}>
					<Grid.Col span={{ lg: 6, base: 12}}>
						<Stack>
							<Text c="#262728" fz={18} fw={600}>
								Embedded Software Engineer
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton>
								<Text c="#292929" fz={12} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
					<Grid.Col span={{ lg: 6, base: 12}}>
						<Stack>
							<Text c="#262728" fz={18} fw={600}>
								Marketing Executive
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton>
								<Text c="#292929" fz={12} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
				</Grid>

				<Grid ml={90} mt={90}>
					<Grid.Col span={{ lg: 6, base: 12}}>
						<Stack>
							<Text c="#262728" fz={18} fw={600}>
								Technical Sales Engineer
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton>
								<Text c="#292929" fz={12} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
					<Grid.Col span={{ lg: 6, base: 12}}>
						<Stack>
							<Text c="#262728" fz={18} fw={600}>
								Documentation Engineer
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={12} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton>
								<Text c="#292929" fz={12} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
				</Grid>
			</Paper>

			<Paper withBorder w={768} h={1840} mt={30} bg={"#000"} visibleFrom="xs" hiddenFrom="md">
				<Grid>
					<Grid.Col span={12}>
						<Stack>
							<Divider size={"md"} ml={90} mt={93} w={334} />
							<Text fz={28} ml={90} c="#F6F6F6">
								Embedded Software Engineer
							</Text>
							<Text fz={{ lg: 18, base: 12}} ml={90} mt={20} c="#E4E8ED">
								Job Description:{" "}
							</Text>
							<List mt={20} ml={90} w={{ lg: 440, base: 328}} lh={"xl"}>
								<List.Item fz={12} c={"#E4E8ED"}>
									Working on existing embedded firmware for upgrades & modifications
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Evaluating a project's firmware needs through client and team meetings{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Designing a firmware solution to meet project needs{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Debugging and testing of firmware to ensure error-free operation{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Evaluating performance and troubleshooting of embedded electronic systems{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Incorporating client feedback into firmware revisions{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Introducing new design techniques and incorporating best practices in firmware
									development{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Co-ordinating with the production department for continual improvement of the
									products under manufacturing{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Preparing required design drawings, diagrams, flowcharts & documentation{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Maintaining version control of firmware{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Updating project status and reporting to managers{" "}
								</List.Item>
							</List>
							<Text c="#E4E8ED" fz={{ lg: 16, base: 10 }} fw={600} ml={90} mt={20}>
								Qualifications
							</Text>
							<List mt={20} ml={90} w={{ lg: 440, base: 328}}>
								<List.Item fz={12} c={"#E4E8ED"}>
									B.E. / B.Tech (Electronics/ Instrumentation/ EXTC){" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									3 to 5 years{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Fresher with Project done in Academic may also be considered.{" "}
								</List.Item>
							</List>
							<Text c="#E4E8ED" fz={{ lg: 16, base: 10 }} fw={600} ml={90} mt={20}>
								Required Skills{" "}
							</Text>
							<List mt={20} ml={90} w={{ lg: 440, base: 328}}>
								<List.Item fz={12} c={"#E4E8ED"}>
									C, C++, Embedded C{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Expertise in Microcontrollers such as 8051, ARM Cortex-M(Architecture &
									Instruction Set){" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Expertise in SPI, I2C, UART communication{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Expertise in the interfacing of ADC, PMW, DAC & LCD{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Working knowledge of signal processing{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Working knowledge of communication protocols such as MODBUS (RTU), Ethernet TCP/IP
									on Cortex M4/M3.{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Working knowledge on IDEs such as KEIL, IAR Embedded Workbench, CUBEIDE, Eclipse,
									Arduino{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Working knowledge of various tools related to embedded development{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Basic knowledge in Hardware Testing & debugging{" "}
								</List.Item>
								<List.Item fz={12} c={"#E4E8ED"}>
									Added advantage: Experience in RTOS framework and nomenclature.{" "}
								</List.Item>
							</List>
						</Stack>
					</Grid.Col>
					<Grid.Col span={12} ml={90}>
						<Stack>
							<Text fz={28} c="#FFF" mt={35}>
								Come Join us
							</Text>

							<Text fz={{ lg: 16, base: 10 }} c="#E4E8ED" w={601}>
								Please get in touch below if you have a product enquiry or would like to know more
								information
							</Text>

							<TextInput
								w={597}
								variant="filled"
								c={"#FFFFFF"}
								styles={{
									input: {
										background: "black",
										borderColor: "#777",
										borderStyle: "solid",
										color: "#E4E8ED",
									},
								}}
								label="Name"
								radius={"xs"}
								withAsterisk
							/>
							<Group>
								<TextInput
									w={289}
									variant="filled"
									c={"#FFFFFF"}
									styles={{
										input: {
											background: "black",
											borderColor: "#777",
											borderStyle: "solid",
										},
									}}
									label="Email Address"
									radius={"xs"}
									withAsterisk
								/>

								<TextInput
									w={289}
									variant="filled"
									c={"#FFFFFF"}
									styles={{
										input: {
											background: "black",
											borderColor: "#777",
											borderStyle: "solid",
										},
									}}
									label="Phone Number"
									radius={"xs"}
									withAsterisk
								/>
							</Group>
							<TextInput
								w={597}
								variant="filled"
								c={"#FFFFFF"}
								styles={{
									input: {
										background: "black",
										borderColor: "#777",
										borderStyle: "solid",
									},
								}}
								label="Applied For"
								radius={"xs"}
								withAsterisk
							/>
							<Textarea
								w={597}
								size="xl"
								variant="filled"
								c={"#FFFFFF"}
								styles={{
									input: {
										background: "black",
										borderColor: "#777",
										borderStyle: "solid",
									},
								}}
								label="Resume"
								radius={"xs"}
								withAsterisk
								placeholder="Click or drag a file to this area to upload."
							/>

							<Stack align="flex-start" ml={459} mt={32}>
								<PrimaryButton w={138}>
									{" "}
									<Text c="#262728" fz={{ lg: 16, base: 10 }} fw={700}>
										SEND
									</Text>
								</PrimaryButton>
							</Stack>
						</Stack>
					</Grid.Col>
				</Grid>
			</Paper> */}
		</>
	);
};

export default CareersPage;

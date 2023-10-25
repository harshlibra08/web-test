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
	SimpleGrid,
	Textarea,
	Text,
} from "@mantine/core";
import React from "react";
import { PrimaryButton } from "./BaseApp/App";

type Props = {};

const CareersPage = (props: Props) => {
	return (
		<>
			<Paper bg={"black"} w={1440} h={439} withBorder mt={50} visibleFrom="xs">
				<Box>
					<Text ta="center" c="#F6F6F6" fz={16} fw={600} mt={103}>
						WORK WITH US
					</Text>
					<Text ta="center" c="#F6F6F6" fz={32} fw={600} mt={18}>
						Professionally
					</Text>
					<Text ta="justify" c="#E4E8ED" fz={16} fw={400} mt={18} w={1006} ml={217}>
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
			<Paper w={1440} h={914} withBorder visibleFrom="xs">
				<Grid ml={264} mt={90}>
					<Grid.Col span={6}>
						<Stack>
							<Text c="#262728" fz={24} fw={600}>
								Embedded Software Engineer
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton>
								<Text c="#292929" fz={16} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
					<Grid.Col span={6}>
						<Stack>
							<Text c="#262728" fz={24} fw={600}>
								Marketing Executive
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton>
								<Text c="#292929" fz={16} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
				</Grid>

				<Grid ml={264} mt={90}>
					<Grid.Col span={6}>
						<Stack>
							<Text c="#262728" fz={24} fw={600}>
								Technical Sales Engineer
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton>
								<Text c="#292929" fz={16} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
					<Grid.Col span={6}>
						<Stack>
							<Text c="#262728" fz={24} fw={600}>
								Documentation Engineer
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Qualification : B.E. / B.Tech
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Experience : At least 3-5 year of relevant experience.
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Job Location : Dahisar - Mumbai
							</Text>
							<Text c="#555459" fz={16} fw={400}>
								Open Positions : 3
							</Text>
							<UnstyledButton>
								<Text c="#292929" fz={16} fw={700}>
									Apply Now
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
				</Grid>
			</Paper>

			<Paper withBorder w={1440} h={1440} mt={30} bg={"#000"} visibleFrom="xs">
				{/* <Group ml={119} mt={48}>
					<Stack>
						<Box w="100%">
							<Divider fz={24} ml={114} mt={93} w={350} />
							<Text size={"32px"} ml={114} mt={6} c="#F6F6F6">
								Embedded Software Engineer
							</Text>
							<Text size={"20px"} ml={119} mt={35} c="#E4E8ED">
								Job Description:{" "}
							</Text>
							<List mt={35} ml={119} w={440}>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Working on existing embedded firmware for upgrades & modifications
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Evaluating a project's firmware needs through client and team meetings{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Designing a firmware solution to meet project needs{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Debugging and testing of firmware to ensure error-free operation{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Evaluating performance and troubleshooting of embedded electronic systems{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Incorporating client feedback into firmware revisions{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Introducing new design techniques and incorporating best practices in firmware
									development{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Co-ordinating with the production department for continual improvement of the
									products under manufacturing{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Preparing required design drawings, diagrams, flowcharts & documentation{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Maintaining version control of firmware{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Updating project status and reporting to managers{" "}
								</List.Item>
							</List>
							<Text c="#E4E8ED" fz={16} fw={600} ml={119} mt={35}>
								Qualifications
							</Text>
							<List mt={35} ml={119} w={440}>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									B.E. / B.Tech (Electronics/ Instrumentation/ EXTC){" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									3 to 5 years{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Fresher with Project done in Academic may also be considered.{" "}
								</List.Item>
							</List>
							<Text c="#E4E8ED" fz={16} fw={600} ml={119} mt={35}>
								Required Skills{" "}
							</Text>
							<List mt={35} ml={119} w={440}>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									C, C++, Embedded C{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Expertise in Microcontrollers such as 8051, ARM Cortex-M(Architecture &
									Instruction Set){" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Expertise in SPI, I2C, UART communication{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Expertise in the interfacing of ADC, PMW, DAC & LCD{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Working knowledge of signal processing{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Working knowledge of communication protocols such as MODBUS (RTU), Ethernet TCP/IP
									on Cortex M4/M3.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Working knowledge on IDEs such as KEIL, IAR Embedded Workbench, CUBEIDE, Eclipse,
									Arduino{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Working knowledge of various tools related to embedded development{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Basic knowledge in Hardware Testing & debugging{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "14px",

										color: "#E4E8ED",
										lineHeight: "160%",
									}}
								>
									Added advantage: Experience in RTOS framework and nomenclature.{" "}
								</List.Item>
							</List>
						</Box>
					</Stack>
					<Stack ml={109} mt={-470}>
						<Text size="lg" c="#FFF">
							Come Join us
						</Text>

						<Text fz={16} c="#E4E8ED" w={601}>
							Please get in touch below if you have a product enquiry or would like to know more
							information
						</Text>

						<TextInput
							w={596}
							variant="filled"
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
								label="Email Address"
								radius={"xs"}
								withAsterisk
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
								label="Phone Number"
								radius={"xs"}
								withAsterisk
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
							label="Applied For"
							radius={"xs"}
							withAsterisk
						/>
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
							label="Resume"
							radius={"xs"}
							withAsterisk
							placeholder="Click or drag a file to this area to upload."
						/>
						<Stack align="flex-end">
							<PrimaryButton w={138}>
								{" "}
								<Text c="#262728" fz={16} fw={700}>
									SEND
								</Text>
							</PrimaryButton>
						</Stack>
					</Stack>
				</Group> */}
				<Grid>
					<Grid.Col span={6}>
						<Stack>
							<Box w="100%">
								<Divider size={"md"} ml={114} mt={93} w={334} />
								<Text size={"32px"} ml={114} mt={8} c="#F6F6F6">
									Embedded Software Engineer
								</Text>
								<Text fz={18} ml={119} mt={35} c="#E4E8ED">
									Job Description:{" "}
								</Text>
								<List mt={35} ml={119} w={440}>
									<List.Item fz={14} c={"#E4E8ED"}>
										Working on existing embedded firmware for upgrades & modifications
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Evaluating a project's firmware needs through client and team meetings{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Designing a firmware solution to meet project needs{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Debugging and testing of firmware to ensure error-free operation{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Evaluating performance and troubleshooting of embedded electronic systems{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Incorporating client feedback into firmware revisions{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Introducing new design techniques and incorporating best practices in firmware
										development{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Co-ordinating with the production department for continual improvement of the
										products under manufacturing{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Preparing required design drawings, diagrams, flowcharts & documentation{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Maintaining version control of firmware{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Updating project status and reporting to managers{" "}
									</List.Item>
								</List>
								<Text c="#E4E8ED" fz={16} fw={600} ml={119} mt={35}>
									Qualifications
								</Text>
								<List mt={35} ml={119} w={440}>
									<List.Item fz={14} c={"#E4E8ED"}>
										B.E. / B.Tech (Electronics/ Instrumentation/ EXTC){" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										3 to 5 years{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Fresher with Project done in Academic may also be considered.{" "}
									</List.Item>
								</List>
								<Text c="#E4E8ED" fz={16} fw={600} ml={119} mt={35}>
									Required Skills{" "}
								</Text>
								<List mt={35} ml={119} w={440}>
									<List.Item fz={14} c={"#E4E8ED"}>
										C, C++, Embedded C{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Expertise in Microcontrollers such as 8051, ARM Cortex-M(Architecture &
										Instruction Set){" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Expertise in SPI, I2C, UART communication{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Expertise in the interfacing of ADC, PMW, DAC & LCD{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Working knowledge of signal processing{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Working knowledge of communication protocols such as MODBUS (RTU), Ethernet
										TCP/IP on Cortex M4/M3.{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Working knowledge on IDEs such as KEIL, IAR Embedded Workbench, CUBEIDE,
										Eclipse, Arduino{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Working knowledge of various tools related to embedded development{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Basic knowledge in Hardware Testing & debugging{" "}
									</List.Item>
									<List.Item fz={14} c={"#E4E8ED"}>
										Added advantage: Experience in RTOS framework and nomenclature.{" "}
									</List.Item>
								</List>
							</Box>
						</Stack>
					</Grid.Col>
					<Grid.Col span={6}>
						<Stack>
							<Text fz={32} c="#FFF" mt={101}>
								Come Join us
							</Text>

							<Text fz={16} c="#E4E8ED" w={601}>
								Please get in touch below if you have a product enquiry or would like to know more
								information
							</Text>

							<TextInput
								w={596}
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
									w={288}
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
									w={288}
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
								w={596}
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
								w={596}
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

							<Stack align="end" mr={114} mt={32}>
								<PrimaryButton w={138}>
									{" "}
									<Text c="#262728" fz={16} fw={700}>
										SEND
									</Text>
								</PrimaryButton>
							</Stack>
						</Stack>
					</Grid.Col>
				</Grid>
			</Paper>
			{/* </MantineProvider> */}
		</>
	);
};

export default CareersPage;

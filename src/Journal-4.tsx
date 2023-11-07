import { Paper, Group, Box, Divider, Grid, UnstyledButton, Text, Image, Tabs } from "@mantine/core";
import React from "react";
import Event1 from "./Assets/event1.png";
import Event2 from "./Assets/event2.png";
import Event3 from "./Assets/event3.png";
import Event4 from "./Assets/event4.png";
import EventBg from "./Assets/eventbg.png";
import DAQ from "./Assets/dataacc.png";

type Props = {};

const JournalFour = (props: Props) => {
	return (
		<>
			<Paper w={{ base: 360 }} h={2600} bg={"black"} mt={30}>
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text fz={{ base: 15 }} mt={{ base: 59 }} ml={{ base: 16 }} c={"#f6f6f6"}>
							Services{" "}
						</Text>
						<Divider size="xs" ml={{ base: 16 }} w={{ base: 328 }} mt={{ base: 16 }} />
					</Box>
				</Group>
				<Tabs
					color="rgba(255, 255, 255, 1)"
					defaultValue="Data"
					ml={{ base: 16 }}
					maw={{ base: 360 }}
				>
					<Tabs.List>
						<Tabs.Tab value="Data">
							<Text fz={{ base: 9 }} c={"#FFF"} ta={"center"}>
								Data Acquisition <br />
								Software
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="IOT">
							<Text fz={{ base: 9 }} c={"#FFF"} ta={"center"}>
								IoT (Internet <br /> of Things)
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="pwht">
							<Text fz={{ base: 9 }} c={"#FFF"} ta={"center"}>
								Post Weld Heat <br /> Treatment (PWHT) Vision
							</Text>
						</Tabs.Tab>
					</Tabs.List>
				</Tabs>
				<Text c={"#f6f6f6"} ta="center" fz={{ base: 14 }} pt={{ base: 64 }}>
					Data Acquisition Software (DAQ)
				</Text>

				<Text ml={{ base: 16 }} c={"#e4e8ed"} ta="left" fz={{ base: 12 }} mt={16} w={328} fw={400}>
					Libratherm offers Data Acquisition Software - which uploads the stored data from
					Libratherm devices and it saves on the computer. We offer customized software to meet the
					user's specific requirement of acquiring the process data for further analysis and record
					logging.
				</Text>
				<Image ml={{ base: 17 }} src={DAQ} w={326} h={203} mt={{ base: 24 }} />

				<Text ml={{ base: 16 }} c={"#f6f6f6"} fz={14} mt={{ base: 40 }}>
					Salient Features of the Standard Software
				</Text>
				<Text
					ml={{ base: 16 }}
					c={"#e4e8ed"}
					fz={{ base: 12 }}
					mt={{ base: 24 }}
					w={{ base: 327 }}
					fw={400}
				>
					<li>
						The PC software version EDATALOG is available on a single CD. This software is to be
						loaded on to the computer's hard disk, and it allows interfacing of DATALOG to the
						computer.
					</li>
					<br />
					<li>
						The interfacing with the computer is made either on serial com port or on USB port.
					</li>
					<br />
					<li>
						The front panel screen GUI (Graphical User Interface), in general, allows the user to
						configure:
					</li>
					<ol type="a">
						<li>COM port settings</li>
						<li> DATALOG input selection</li>
						<li> Setting of log interval</li>
						<li> Setting of security passwords</li>
						<li>
							Viewing of current data and historical data in the tabular and graphical format.
						</li>
					</ol>
					<br />

					<li>
						{" "}
						The data of all channels are stored on the computer's hard disk by start date and time,
						continuously at the rate of programmed log interval.
					</li>
					<br />

					<li>
						Print out of the report and graph can be taken for the selected channel, with the real
						date and time.{" "}
					</li>
					<br />

					<li>
						{" "}
						The X and Y coordinates of the graph are automatically adjusted based on the process
						value so that the pattern is visible on the center of the screen. This is called
						auto-scaling which applies to all the channel.{" "}
					</li>
					<br />

					<li>
						Customer or user can enter their own desired alphanumeric field, such as company name,
						operator name, channel nomenclature, unit of measurement, process name, etc. to
						customize the software as per their requirements while generating the report or graph
						on-screen or on the hard copy.{" "}
					</li>
					<br />

					<li>Any other software facility can be customized as per the user's requirements. </li>
				</Text>

				{/* <Text c={"#f6f6f6"} ta="center" fz={32} pt={{ base: 64}}>
					Data Acquisition Software (DAQ)
				</Text>
				<Text ml={217} c={"#e4e8ed"} ta="left" fz={16} pt={34} w={1006} fw={400}>
					Libratherm offers Data Acquisition Software - which uploads the stored data from
					Libratherm devices and it saves on the computer. We offer customized software to meet the
					user's specific requirement of acquiring the process data for further analysis and record
					logging.
				</Text>
				<Image ml={319} src={DAQ} w={802} h={501} mt={64} />

				<Text ml={217} c={"#f6f6f6"} ta="left" fz={24} pt={128}>
					Salient Features of the Standard Software
				</Text>
				<Text ml={217} c={"#e4e8ed"} ta="left" fz={16} pt={32} w={1006} fw={400}>
					<li>
						The PC software version EDATALOG is available on a single CD. This software is to be
						loaded on to the computer's hard disk, and it allows interfacing of DATALOG to the
						computer.
					</li>
					<br />
					<li>
						The interfacing with the computer is made either on serial com port or on USB port.
					</li>
					<br />
					<li>
						The front panel screen GUI (Graphical User Interface), in general, allows the user to
						configure:
					</li>
					<ol type="a">
						<li>COM port settings</li>
						<li> DATALOG input selection</li>
						<li> Setting of log interval</li>
						<li> Setting of security passwords</li>
						<li>
							Viewing of current data and historical data in the tabular and graphical format.
						</li>
					</ol>
					<br />

					<li>
						{" "}
						The data of all channels are stored on the computer's hard disk by start date and time,
						continuously at the rate of programmed log interval.
					</li>
					<br />

					<li>
						Print out of the report and graph can be taken for the selected channel, with the real
						date and time.{" "}
					</li>
					<br />

					<li>
						{" "}
						The X and Y coordinates of the graph are automatically adjusted based on the process
						value so that the pattern is visible on the center of the screen. This is called
						auto-scaling which applies to all the channel.{" "}
					</li>
					<br />

					<li>
						Customer or user can enter their own desired alphanumeric field, such as company name,
						operator name, channel nomenclature, unit of measurement, process name, etc. to
						customize the software as per their requirements while generating the report or graph
						on-screen or on the hard copy.{" "}
					</li>
					<br />

					<li>Any other software facility can be customized as per the user's requirements. </li>
				</Text>
*/}

				<Text ml={{ base: 16 }} c={"#ffffff"} ta="left" fz={{ base: 14 }} pt={{ base: 48 }}>
					Products with Data Aquisition Software
				</Text>
				<Grid justify="center">
					<Grid.Col span={12} mah={{ base: 250 }}>
						<Box pos="relative" w={{ base: 360 }} h={280}>
							<Image src={EventBg} h={202} w={82} pos="absolute" ml={{ base: 16 }} />
							<Image src={Event1} h={164} w={164} pos="absolute" mt={20} ml={{ base: 37 }} />
							<Text c={"#e4e8ed"} fz={{ base: 12 }} ml={{ base: 221 }} mt={{ base: 42 }}>
								PRC 300
							</Text>
							<Text
								c={"#ffffff"}
								fz={{ base: 14 }}
								mt={{ base: 16 }}
								ml={{ base: 221 }}
								w={{ base: 123 }}
							>
								Ramp Soak PID Temperature Controller
							</Text>
							<UnstyledButton>
								<Group>
									<Text
										c={"#ffffff"}
										fz={{ base: 13 }}
										ml={{ base: 221 }}
										mt={{ base: 14 }}
										fw={400}
									>
										View
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
					<Grid.Col span={12} mah={{ base: 250 }}>
						<Box pos="relative" w={{ base: 360 }} h={280}>
							<Image src={EventBg} h={202} w={82} pos="absolute" ml={{ base: 16 }} />
							<Image src={Event1} h={164} w={164} pos="absolute" mt={20} ml={{ base: 37 }} />
							<Text c={"#e4e8ed"} fz={{ base: 12 }} ml={{ base: 221 }} mt={{ base: 42 }}>
								PRC 300
							</Text>
							<Text
								c={"#ffffff"}
								fz={{ base: 14 }}
								mt={{ base: 16 }}
								ml={{ base: 221 }}
								w={{ base: 123 }}
							>
								Ramp Soak PID Temperature Controller
							</Text>
							<UnstyledButton>
								<Group>
									<Text
										c={"#ffffff"}
										fz={{ base: 13 }}
										ml={{ base: 221 }}
										mt={{ base: 14 }}
										fw={400}
									>
										View
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
					<Grid.Col span={12} mah={{ base: 250 }}>
						<Box pos="relative" w={{ base: 360 }} h={280}>
							<Image src={EventBg} h={202} w={82} pos="absolute" ml={{ base: 16 }} />
							<Image src={Event1} h={164} w={164} pos="absolute" mt={20} ml={{ base: 37 }} />
							<Text c={"#e4e8ed"} fz={{ base: 12 }} ml={{ base: 221 }} mt={{ base: 42 }}>
								PRC 300
							</Text>
							<Text
								c={"#ffffff"}
								fz={{ base: 14 }}
								mt={{ base: 16 }}
								ml={{ base: 221 }}
								w={{ base: 123 }}
							>
								Ramp Soak PID Temperature Controller
							</Text>
							<UnstyledButton>
								<Group>
									<Text
										c={"#ffffff"}
										fz={{ base: 13 }}
										ml={{ base: 221 }}
										mt={{ base: 14 }}
										fw={400}
									>
										View
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
					<Grid.Col span={12} mah={{ base: 250 }}>
						<Box pos="relative" w={{ base: 360 }} h={280}>
							<Image src={EventBg} h={202} w={82} pos="absolute" ml={{ base: 16 }} />
							<Image src={Event1} h={164} w={164} pos="absolute" mt={20} ml={{ base: 37 }} />
							<Text c={"#e4e8ed"} fz={{ base: 12 }} ml={{ base: 221 }} mt={{ base: 42 }}>
								PRC 300
							</Text>
							<Text
								c={"#ffffff"}
								fz={{ base: 14 }}
								mt={{ base: 16 }}
								ml={{ base: 221 }}
								w={{ base: 123 }}
							>
								Ramp Soak PID Temperature Controller
							</Text>
							<UnstyledButton>
								<Group>
									<Text
										c={"#ffffff"}
										fz={{ base: 13 }}
										ml={{ base: 221 }}
										mt={{ base: 14 }}
										fw={400}
									>
										View
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
			</Paper>
			{/**Mobile View */}
			{/* <Paper w={360} h={2800} bg={"black"} hiddenFrom="xs">
				<Group wrap="nowrap">
					<Box w="100%">
						<Text fz={20} mt={91} ml={{ base: 16 }} c={"#f6f6f6"}>
							Services
						</Text>
						<Divider size="xs" my={16} ml={{ base: 16 }} w={344} />
					</Box>
				</Group>
				<Tabs color="rgba(255, 255, 255, 1)" defaultValue="Data" ml={{ base: 16 }} maw={360}>
					<Tabs.List>
						<Tabs.Tab value="Data">
							<Text fz={{ base: 9 }} c={"#FFF"} ta={"center"}>
								Data Acquisition <br />
								Software
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="IOT">
							<Text fz={{ base: 9 }} c={"#FFF"} ta={"center"}>
								IoT (Internet <br /> of Things)
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="pwht">
							<Text fz={{ base: 9 }} c={"#FFF"} ta={"center"}>
								Post Weld Heat <br /> Treatment (PWHT) Vision
							</Text>
						</Tabs.Tab>
					</Tabs.List>
				</Tabs>
				<Text c={"#f6f6f6"} ml={100} w={160} ta={"center"} fz={14} pt={40}>
					Data Acquisition Software (DAQ)
				</Text>
				<Text ml={{ base: 16 }} c={"#e4e8ed"} ta="left" fz={{ base: 12}} mt={16} w={328} fw={400}>
					Libratherm offers Data Acquisition Software - which uploads the stored data from
					Libratherm devices and it saves on the computer. We offer customized software to meet the
					user's specific requirement of acquiring the process data for further analysis and record
					logging.
				</Text>
				<Image ml={{ base: 17}} src={DAQ} w={326} h={203} mt={{ base: 24}} />

				<Text ml={{ base: 16 }} c={"#f6f6f6"} fz={14} mt={{ base: 40}}>
					Salient Features of the Standard Software
				</Text>
				<Text ml={{ base: 16 }} c={"#e4e8ed"} fz={{ base: 12}} mt={{ base: 24}} w={{base: 327}} fw={400}>
					<li>
						The PC software version EDATALOG is available on a single CD. This software is to be
						loaded on to the computer's hard disk, and it allows interfacing of DATALOG to the
						computer.
					</li>
					<br />
					<li>
						The interfacing with the computer is made either on serial com port or on USB port.
					</li>
					<br />
					<li>
						The front panel screen GUI (Graphical User Interface), in general, allows the user to
						configure:
					</li>
					<ol type="a">
						<li>COM port settings</li>
						<li> DATALOG input selection</li>
						<li> Setting of log interval</li>
						<li> Setting of security passwords</li>
						<li>
							Viewing of current data and historical data in the tabular and graphical format.
						</li>
					</ol>
					<br />

					<li>
						{" "}
						The data of all channels are stored on the computer's hard disk by start date and time,
						continuously at the rate of programmed log interval.
					</li>
					<br />

					<li>
						Print out of the report and graph can be taken for the selected channel, with the real
						date and time.{" "}
					</li>
					<br />

					<li>
						{" "}
						The X and Y coordinates of the graph are automatically adjusted based on the process
						value so that the pattern is visible on the center of the screen. This is called
						auto-scaling which applies to all the channel.{" "}
					</li>
					<br />

					<li>
						Customer or user can enter their own desired alphanumeric field, such as company name,
						operator name, channel nomenclature, unit of measurement, process name, etc. to
						customize the software as per their requirements while generating the report or graph
						on-screen or on the hard copy.{" "}
					</li>
					<br />

					<li>Any other software facility can be customized as per the user's requirements. </li>
				</Text>

				<Text ml={{ base: 16 }} c={"#ffffff"} fz={14} mt={48}>
					Products with Data Aquisition Software
				</Text>

				<Grid ml={{ base: 16 }} maw={360}>
					<Grid.Col span={6}>
						<Box pos="relative" w={360} h={280}>
							<Image src={EventBg} h={202} w={82} pos="absolute" mt={{ base: 24}} />
							<Image src={Event1} h={164} w={164} pos="absolute" mt={44} ml={21} />
						</Box>
					</Grid.Col>
					<Grid.Col span={6}>
						<Text c={"#e4e8ed"} fz={{ base: 12}} mt={42} ml={20}>
							PRC 300
						</Text>
						<Text c={"#ffffff"} fz={14} mt={15} w={123} ml={20}>
							Ramp Soak PID Temperature Controller{" "}
						</Text>
						<UnstyledButton ml={20} mt={14}>
							<Text fz={13} c={"#f6f6f6"}>
								View
							</Text>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
				<Grid ml={{ base: 16 }} maw={360}>
					<Grid.Col span={6}>
						<Box pos="relative" w={360} h={280}>
							<Image src={EventBg} h={202} w={82} pos="absolute" mt={{ base: 24}} />
							<Image src={Event1} h={164} w={164} pos="absolute" mt={44} ml={21} />
						</Box>
					</Grid.Col>
					<Grid.Col span={6}>
						<Text c={"#e4e8ed"} fz={{ base: 12}} mt={42} ml={20}>
							PRC 300
						</Text>
						<Text c={"#ffffff"} fz={14} mt={15} w={123} ml={20}>
							Ramp Soak PID Temperature Controller{" "}
						</Text>
						<UnstyledButton ml={20} mt={14}>
							<Text fz={13} c={"#f6f6f6"}>
								View
							</Text>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
				<Grid ml={{ base: 16 }} maw={360}>
					<Grid.Col span={6}>
						<Box pos="relative" w={360} h={280}>
							<Image src={EventBg} h={202} w={82} pos="absolute" mt={{ base: 24}} />
							<Image src={Event1} h={164} w={164} pos="absolute" mt={44} ml={21} />
						</Box>
					</Grid.Col>
					<Grid.Col span={6}>
						<Text c={"#e4e8ed"} fz={{ base: 12}} mt={42} ml={20}>
							PRC 300
						</Text>
						<Text c={"#ffffff"} fz={14} mt={15} w={123} ml={20}>
							Ramp Soak PID Temperature Controller{" "}
						</Text>
						<UnstyledButton ml={20} mt={14}>
							<Text fz={13} c={"#f6f6f6"}>
								View
							</Text>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
				<Grid ml={{ base: 16 }} maw={360}>
					<Grid.Col span={6}>
						<Box pos="relative" w={360} h={280}>
							<Image src={EventBg} h={202} w={82} pos="absolute" mt={{ base: 24}} />
							<Image src={Event1} h={164} w={164} pos="absolute" mt={44} ml={21} />
						</Box>
					</Grid.Col>
					<Grid.Col span={6}>
						<Text c={"#e4e8ed"} fz={{ base: 12}} mt={42} ml={20}>
							PRC 300
						</Text>
						<Text c={"#ffffff"} fz={14} mt={15} w={123} ml={20}>
							Ramp Soak PID Temperature Controller{" "}
						</Text>
						<UnstyledButton ml={20} mt={14}>
							<Text fz={13} c={"#f6f6f6"}>
								View
							</Text>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
			</Paper> */}

			{/**Tablet View */}
			{/* <Paper w={768} h={2400} bg={"black"} hiddenFrom="md" visibleFrom="xs">
				<Text fz={32} pt={91} ml={90} c={"#f6f6f6"}>
					Services
				</Text>
				<Divider size="md" my={26} w={768} mx={90} />
				<Tabs color="rgba(255, 255, 255, 1)" defaultValue="Data" ml={90} maw={768}>
					<Tabs.List>
						<Tabs.Tab value="Data">
							<Text fz={14} c={"#FFF"} ta={"center"}>
								Data Acquisition <br />
								Software
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="IOT">
							<Text fz={14} c={"#FFF"} ta={"center"} ml={90}>
								IoT (Internet <br /> of Things)
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="pwht">
							<Text fz={14} c={"#FFF"} ta={"center"} ml={90}>
								Post Weld Heat <br /> Treatment (PWHT) Vision
							</Text>
						</Tabs.Tab>
					</Tabs.List>
				</Tabs>
				<Text c={"#f6f6f6"} w={588} ta={"center"} mx={90} fz={32} pt={40}>
					Data Acquisition Software (DAQ)
				</Text>
				<Text ml={90} c={"#e4e8ed"} ta="center" fz={{ base: 12}} mt={18} w={588} fw={400}>
					Libratherm offers Data Acquisition Software - which uploads the stored data from
					Libratherm devices and it saves on the computer. We offer customized software to meet the
					user's specific requirement of acquiring the process data for further analysis and record
					logging.
				</Text>
				<Image ml={90} src={DAQ} w={588} h={355} mt={32} />
				<Text ml={90} c={"#f6f6f6"} fz={20} mt={64}>
					Salient Features of the Standard Software
				</Text>
				<Text ml={90} c={"#e4e8ed"} fz={{ base: 12}} mt={{ base: 24}} w={588} fw={400}>
					<li>
						The PC software version EDATALOG is available on a single CD. This software is to be
						loaded on to the computer's hard disk, and it allows interfacing of DATALOG to the
						computer.
					</li>
					<br />
					<li>
						The interfacing with the computer is made either on serial com port or on USB port.
					</li>
					<br />
					<li>
						The front panel screen GUI (Graphical User Interface), in general, allows the user to
						configure:
					</li>
					<ol type="a">
						<li>COM port settings</li>
						<li> DATALOG input selection</li>
						<li> Setting of log interval</li>
						<li> Setting of security passwords</li>
						<li>
							Viewing of current data and historical data in the tabular and graphical format.
						</li>
					</ol>
					<br />

					<li>
						{" "}
						The data of all channels are stored on the computer's hard disk by start date and time,
						continuously at the rate of programmed log interval.
					</li>
					<br />

					<li>
						Print out of the report and graph can be taken for the selected channel, with the real
						date and time.{" "}
					</li>
					<br />

					<li>
						{" "}
						The X and Y coordinates of the graph are automatically adjusted based on the process
						value so that the pattern is visible on the center of the screen. This is called
						auto-scaling which applies to all the channel.{" "}
					</li>
					<br />

					<li>
						Customer or user can enter their own desired alphanumeric field, such as company name,
						operator name, channel nomenclature, unit of measurement, process name, etc. to
						customize the software as per their requirements while generating the report or graph
						on-screen or on the hard copy.{" "}
					</li>
					<br />

					<li>Any other software facility can be customized as per the user's requirements. </li>
				</Text>
				<Text ml={90} c={"#ffffff"} fz={20} mt={64}>
					Products with Data Aquisition Software
				</Text>
				<Grid ml={90} mt={30}>
					<Grid.Col span={3}>
						<Box pos="relative" w={360} h={280}>
							<Image src={EventBg} h={202} w={82} pos="absolute" mt={{ base: 24}} />
							<Image src={Event1} h={164} w={164} pos="absolute" mt={44} ml={21} />
						</Box>
					</Grid.Col>
					<Grid.Col span={3}>
						<Text c={"#e4e8ed"} fz={{ base: 12}} mt={42} ml={20}>
							PRC 300
						</Text>
						<Text c={"#ffffff"} fz={14} mt={15} w={123} ml={20}>
							Ramp Soak PID Temperature Controller{" "}
						</Text>
						<UnstyledButton mt={14}>
							<Text fz={13} c={"#f6f6f6"} ml={20}>
								View
							</Text>
						</UnstyledButton>
					</Grid.Col>

					<Grid.Col span={3}>
						<Box pos="relative" h={280}>
							<Image src={EventBg} h={202} w={82} pos="absolute" mt={{ base: 24}} />
							<Image src={Event1} h={164} w={164} pos="absolute" mt={44} ml={21} />
						</Box>
					</Grid.Col>
					<Grid.Col span={3}>
						<Text c={"#e4e8ed"} fz={{ base: 12}} mt={42} ml={20}>
							PRC 300
						</Text>
						<Text c={"#ffffff"} fz={14} mt={15} w={123} ml={20}>
							Ramp Soak PID Temperature Controller{" "}
						</Text>
						<UnstyledButton ml={20} mt={14}>
							<Text fz={13} c={"#f6f6f6"}>
								View
							</Text>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={3}>
						<Box pos="relative" h={280}>
							<Image src={EventBg} h={202} w={82} pos="absolute" mt={{ base: 24}} />
							<Image src={Event1} h={164} w={164} pos="absolute" mt={44} ml={21} />
						</Box>
					</Grid.Col>
					<Grid.Col span={3}>
						<Text c={"#e4e8ed"} fz={{ base: 12}} mt={42} ml={20}>
							PRC 300
						</Text>
						<Text c={"#ffffff"} fz={14} mt={15} w={123} ml={20}>
							Ramp Soak PID Temperature Controller{" "}
						</Text>
						<UnstyledButton ml={20} mt={14}>
							<Text fz={13} c={"#f6f6f6"}>
								View
							</Text>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={3}>
						<Box pos="relative" h={280}>
							<Image src={EventBg} h={202} w={82} pos="absolute" mt={{ base: 24}} />
							<Image src={Event1} h={164} w={164} pos="absolute" mt={44} ml={21} />
						</Box>
					</Grid.Col>
					<Grid.Col span={3}>
						<Text c={"#e4e8ed"} fz={{ base: 12}} mt={42} ml={20}>
							PRC 300
						</Text>
						<Text c={"#ffffff"} fz={14} mt={15} w={123} ml={20}>
							Ramp Soak PID Temperature Controller{" "}
						</Text>
						<UnstyledButton ml={20} mt={14}>
							<Text fz={13} c={"#f6f6f6"}>
								View
							</Text>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
			</Paper> */}
		</>
	);
};

export default JournalFour;

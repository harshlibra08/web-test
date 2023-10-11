import { Paper, Group, Box, Divider, Grid, UnstyledButton, Text, Image } from "@mantine/core";
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
		<Paper w={1440} h={3500} mt={30} bg={"black"}>
			<Group wrap="nowrap">
				<Box w="100%">
					<Text fz={32} mt={91} ml={114} style={{ color: "#F6F6F6" }}>
						Services
					</Text>
					<Divider size="md" my={23} mr={114} ml={114} pb={40} />
				</Box>
			</Group>

			<Text style={{ color: "#F6F6F6" }} ta="center" fz={32} pt={64}>
				Data Acquisition Software (DAQ)
			</Text>
			<Text ml={217} style={{ color: "#E4E8ED" }} ta="left" fz={16} pt={34} w={1006} fw={400}>
				Libratherm offers Data Acquisition Software - which uploads the stored data from Libratherm
				devices and it saves on the computer. We offer customized software to meet the user's
				specific requirement of acquiring the process data for further analysis and record logging.
			</Text>
			<Image ml={319} src={DAQ} w={802} h={501} mt={64} />

			<Text ml={217} style={{ color: "#F6F6F6" }} ta="left" fz={24} pt={128}>
				Salient Features of the Standard Software
			</Text>
			<Text ml={217} style={{ color: "#E4E8ED" }} ta="left" fz={16} pt={32} w={1006} fw={400}>
				<li>
					The PC software version EDATALOG is available on a single CD. This software is to be
					loaded on to the computer's hard disk, and it allows interfacing of DATALOG to the
					computer.
				</li>
				<br />
				<li>The interfacing with the computer is made either on serial com port or on USB port.</li>
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
					<li>Viewing of current data and historical data in the tabular and graphical format.</li>
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
					The X and Y coordinates of the graph are automatically adjusted based on the process value
					so that the pattern is visible on the center of the screen. This is called auto-scaling
					which applies to all the channel.{" "}
				</li>
				<br />

				<li>
					Customer or user can enter their own desired alphanumeric field, such as company name,
					operator name, channel nomenclature, unit of measurement, process name, etc. to customize
					the software as per their requirements while generating the report or graph on-screen or
					on the hard copy.{" "}
				</li>
				<br />

				<li>Any other software facility can be customized as per the user's requirements. </li>
			</Text>

			<Text ml={217} style={{ color: "#FFFFFF" }} ta="left" fz={24} pt={128} mb={86}>
				Products with Data Aquisition Software
			</Text>

			<Grid justify="center">
				<Grid.Col span={6}>
					<Box pos="relative" w={1440} h={280}>
						<Image src={EventBg} h={202} w={82} pos="absolute" top={0} left={217} />
						<Image src={Event1} h={164} w={164} pos="absolute" top={20} left={237} />
						<Text style={{ color: "#E4E8ED" }} fz={12} ml={432}>
							PRC 300
						</Text>
						<Text style={{ color: "#FFFFFF" }} fz={16} ml={432} mt={15} w={226}>
							Ramp Soak PID Temperature Controller
						</Text>
						<UnstyledButton>
							<Group>
								<Text style={{ color: "#FFFFFF" }} fz={16} ml={432} mt={32} fw={400}>
									View
								</Text>
							</Group>
						</UnstyledButton>
					</Box>
				</Grid.Col>
				<Grid.Col span={6}>
					<Box pos="relative" w={1200} h={280}>
						<Image src={EventBg} h={202} w={82} pos="absolute" top={0} left={114} />
						<Image src={Event2} h={164} w={164} pos="absolute" top={20} left={135} />
						<Text style={{ color: "#E4E8ED" }} fz={12} ml={319}>
							PRC 300 2
						</Text>
						<Text style={{ color: "#FFFFFF" }} fz={16} w={226} ml={319} mt={15}>
							Ramp Soak PID Temperature Controller
						</Text>
						<UnstyledButton>
							<Group>
								<Text style={{ color: "#FFFFFF" }} fz={16} ml={315} mt={32} fw={400}>
									View
								</Text>
							</Group>
						</UnstyledButton>
					</Box>
				</Grid.Col>
				<Grid.Col span={6}>
					<Box pos="relative" w={1200} h={280}>
						<Image src={EventBg} h={202} w={82} pos="absolute" top={0} left={217} />
						<Image src={Event3} h={164} w={164} pos="absolute" top={20} left={237} />
						<Text style={{ color: "#E4E8ED" }} fz={12} ml={432}>
							PRC 300 3
						</Text>
						<Text style={{ color: "#FFFFFF" }} fz={16} w={226} ml={432} mt={15}>
							Ramp Soak PID Temperature Controller
						</Text>
						<UnstyledButton>
							<Group>
								<Text style={{ color: "#FFFFFF" }} fz={16} ml={432} mt={32} fw={400}>
									View
								</Text>
							</Group>
						</UnstyledButton>
					</Box>
				</Grid.Col>
				<Grid.Col span={6}>
					<Box pos="relative" w={1200} h={280}>
						<Image src={EventBg} h={202} w={82} pos="absolute" top={0} left={114} />
						<Image src={Event4} h={164} w={164} pos="absolute" top={20} left={135} />
						<Text style={{ color: "#E4E8ED" }} fz={12} ml={319}>
							PRC 300 4
						</Text>
						<Text style={{ color: "#FFFFFF" }} fz={16} w={226} ml={319} mt={15}>
							Ramp Soak PID Temperature Controller
						</Text>
						<UnstyledButton>
							<Group>
								<Text style={{ color: "#FFFFFF" }} fz={16} ml={315} mt={32} fw={400}>
									View
								</Text>
							</Group>
						</UnstyledButton>
					</Box>
				</Grid.Col>
			</Grid>
		</Paper>
	);
};

export default JournalFour;

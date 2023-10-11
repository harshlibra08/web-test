import { Paper, Group, Box, Divider, List, Grid, Text, Image } from "@mantine/core";
import React from "react";
import Iot from "./Assets/iot.png";
import IOT1 from "./Assets/iot1.png";
import IOTApp from "./Assets/IotApp.png";
type Props = {};

const IOT = (props: Props) => {
	return (
		<Paper w={1440} h={3350} mt={30} bg={"black"}>
			<Group wrap="nowrap" gap={0}>
				<Box w="100%">
					<Text fz={32} mt={91} ml={114} style={{ color: "#F6F6F6" }}>
						Services
					</Text>
					<Divider size="md" my={23} mr={114} ml={114} pb={40} />
				</Box>
			</Group>
			<Text style={{ color: "#F6F6F6" }} ta="center" fz={32} pt={64}>
				IoT (Internet of Things)
			</Text>
			<Text ml={217} style={{ color: "#F6F6F6" }} ta="left" fz={16} pt={34} w={1011}>
				The Internet of Things is a system of interrelated devices that are provided with the
				ability to transfer data over a network without requiring human-to-human or
				human-to-computer interaction.
			</Text>
			<Image src={Iot} w={822} h={456} pt={64} ml={299} />

			<Text style={{ color: "#F6F6F6" }} ta="left" fz={24} pt={128} ml={217}>
				What we offer?
			</Text>
			<Text style={{ color: "E4E8ED" }} ta="left" fz={16} pt={32} w={1006} fw={400} ml={217}>
				IoT for Process Monitor, Control and Data Logging
				<List>
					<List.Item
						style={{
							fontSize: "16px",
							fontWeight: "400",
							color: "#E4E8ED",
							lineHeight: "30px",
						}}
					>
						Introducing Wi-Fi / Ethernet based interfaceable or stand alone IoT modules for
						monitoring, controlling, and Data logging industrial processes. Libratherm offers a
						fully managed back end service along with a customizable WebApp available on PC,
						Smartphones, and Tablets.
					</List.Item>
					<List.Item
						style={{
							fontSize: "16px",
							fontWeight: "400",
							color: "#E4E8ED",
						}}
					>
						These modules can capture data from RS-485 enabled hardware or various Analog & Digital
						Sources.
					</List.Item>
				</List>
			</Text>
			<Paper w={1440} h={1014} bg={"white"} mt={128}>
				<Grid ml={164} mt={128}>
					<Grid.Col span={6}>
						<Image src={IOT1} w={437} h={258} mt={128} />
					</Grid.Col>
					<Grid.Col span={6}>
						<Image src={IOT1} w={437} h={258} mt={128} />
					</Grid.Col>
				</Grid>

				<Text fz={24} fw={600} pt={64} pl={217}>
					Description
				</Text>
				<Text fz={16} w={1250} pl={217} pt={32} style={{ lineHeight: "24.4px", color: "#555459" }}>
					Libratherm offers IoT modules, which allow the user to remotely monitor and control the
					Industrial process directly on the Internet via an Ethernet/Wi-Fi network.
					<br />
					LSD-01 can be used to interface any process controller having an RS485 MODBUS interface to
					capture all the process parameters, which can be monitored using Customized Web-App on
					smart devices like Computer, Tablet or Mobile Phones. <br />
					LSD-02 can be used to directly connect the Industrial sensors such as Pt-100 or T+RH
					sensor/transmitter generating Voltage or Current Signal. The analog process value is then
					monitored through WebApp on the smart devices like Computer, Tablet or Mobile Phones.{" "}
					<br />
					At the user end, Internet connectivity must be available preferably over Wi-Fi or over an
					Ethernet for the functioning of these modules.
				</Text>

				<Text fz={24} fw={"600"} pt={64} pl={217}>
					Key Features
				</Text>
				<Text fz={16} w={1250} pl={217} pt={32} style={{ lineHeight: "24.4px", color: "#555459" }}>
					<li>
						Direct Interface to Internet via Wi-Fi / Ethernet. No expensive gateways required.
					</li>
					<li>Monitor and Control Devices over the Internet in near real time.</li>
					<li>
						Easy to Use customizable WebApp available on PC, Smartphone, and Tablet for viewing
						current and historical trends.
					</li>

					<li>SMS and Email alerts for events and fault conditions.</li>
				</Text>
			</Paper>

			<Text fz={24} fw={"600"} pt={128} pl={217} style={{ color: "#F6F6F6" }}>
				IOT App Screen
			</Text>
			<Image src={IOTApp} w={1006} h={484} ml={217} mt={64} />
			<Text fz={16} fw={400} w={1016} ml={217} mt={64} style={{ color: "#F6F6F6" }}>
				Libratherm offers IoT modules, which allow the user to remotely monitor and control the
				Industrial process directly on the Internet via an Ethernet/Wi-Fi network. <br />
				LSD-01 can be used to interface any process controller having an RS485 MODBUS interface to
				capture all the process parameters, which can be monitored using Customized Web-App on smart
				devices like Computer, Tablet or Mobile Phones. <br />
				LSD-02 can be used to directly connect the Industrial sensors such as Pt-100 or T+RH
				sensor/transmitter generating Voltage or Current Signal. The analog process value is then
				monitored through WebApp on the smart devices like Computer, Tablet or Mobile Phones. <br />
				At the user end, Internet connectivity must be available preferably over Wi-Fi or over an
				Ethernet for the functioning of these modules. <br />
			</Text>
		</Paper>
	);
};

export default IOT;

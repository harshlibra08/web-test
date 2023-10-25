import { Paper, Group, Box, Divider, List, Grid, Text, Image, Tabs } from "@mantine/core";
import React from "react";
import Iot from "./Assets/iot.png";
import IOT1 from "./Assets/iot1.png";
import IOTApp from "./Assets/IotApp.png";
type Props = {};

const IOT = (props: Props) => {
	return (
		<>
			<Paper w={1440} h={3550} bg={"black"} visibleFrom="xs">
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text fz={32} mt={91} ml={114} c={"#f6f6f6"}>
							Services
						</Text>
						<Divider size="md" my={23} mr={114} ml={114} pb={40} />
					</Box>
				</Group>
				<Text c={"#f6f6f6"} ta="center" fz={32} pt={64}>
					IoT (Internet of Things)
				</Text>
				<Text ml={217} c={"#f6f6f6"} ta="left" fz={16} pt={34} w={1011}>
					The Internet of Things is a system of interrelated devices that are provided with the
					ability to transfer data over a network without requiring human-to-human or
					human-to-computer interaction.
				</Text>
				<Image src={Iot} w={822} h={456} pt={64} ml={299} />

				<Text c={"#f6f6f6"} ta="left" fz={24} pt={128} ml={217}>
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
							These modules can capture data from RS-485 enabled hardware or various Analog &
							Digital Sources.
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
					<Text
						fz={16}
						w={1250}
						pl={217}
						pt={32}
						style={{ lineHeight: "24.4px", color: "#555459" }}
					>
						Libratherm offers IoT modules, which allow the user to remotely monitor and control the
						Industrial process directly on the Internet via an Ethernet/Wi-Fi network.
						<br />
						LSD-01 can be used to interface any process controller having an RS485 MODBUS interface
						to capture all the process parameters, which can be monitored using Customized Web-App
						on smart devices like Computer, Tablet or Mobile Phones. <br />
						LSD-02 can be used to directly connect the Industrial sensors such as Pt-100 or T+RH
						sensor/transmitter generating Voltage or Current Signal. The analog process value is
						then monitored through WebApp on the smart devices like Computer, Tablet or Mobile
						Phones. <br />
						At the user end, Internet connectivity must be available preferably over Wi-Fi or over
						an Ethernet for the functioning of these modules.
					</Text>

					<Text fz={24} fw={"600"} pt={64} pl={217}>
						Key Features
					</Text>
					<Text
						fz={16}
						w={1250}
						pl={217}
						pt={32}
						style={{ lineHeight: "24.4px", color: "#555459" }}
					>
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

				<Text fz={24} fw={"600"} pt={128} pl={217} c={"#f6f6f6"}>
					IOT App Screen
				</Text>
				<Image src={IOTApp} w={1006} h={484} ml={217} mt={64} />
				<Text fz={16} fw={400} w={1016} ml={217} mt={64} c={"#f6f6f6"}>
					Libratherm offers IoT modules, which allow the user to remotely monitor and control the
					Industrial process directly on the Internet via an Ethernet/Wi-Fi network. <br />
					LSD-01 can be used to interface any process controller having an RS485 MODBUS interface to
					capture all the process parameters, which can be monitored using Customized Web-App on
					smart devices like Computer, Tablet or Mobile Phones. <br />
					LSD-02 can be used to directly connect the Industrial sensors such as Pt-100 or T+RH
					sensor/transmitter generating Voltage or Current Signal. The analog process value is then
					monitored through WebApp on the smart devices like Computer, Tablet or Mobile Phones.{" "}
					<br />
					At the user end, Internet connectivity must be available preferably over Wi-Fi or over an
					Ethernet for the functioning of these modules. <br />
				</Text>
			</Paper>
			{/**Mobile View */}
			<Paper w={1440} h={2800} bg={"black"} hiddenFrom="xs">
				<Group wrap="nowrap">
					<Box w="100%">
						<Text fz={20} mt={91} ml={16} c={"#f6f6f6"}>
							Services
						</Text>
						<Divider size="xs" my={16} ml={16} w={344} />
					</Box>
				</Group>
				<Tabs color="rgba(255, 255, 255, 1)" defaultValue="IOT" ml={16}>
					<Tabs.List>
						<Tabs.Tab value="Data">
							<Text fz={12} w={95} c={"#FFF"}>
								Data Acquisition <br />
								Software
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="IOT">
							<Text fz={12} w={95} c={"#FFF"}>
								IoT (Internet <br /> of Things)
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="pwht">
							<Text fz={12} w={95} c={"#FFF"}>
								Post Weld Heat <br /> Treatment (PWHT) Vision
							</Text>
						</Tabs.Tab>
					</Tabs.List>
				</Tabs>
				<Text c={"#f6f6f6"} ml={100} w={160} ta={"center"} fz={14} pt={40}>
					IoT (Internet of Things)
				</Text>
				<Text ml={16} c={"#e4e8ed"} ta="left" fz={12} mt={16} w={328}>
					The Internet of Things is a system of interrelated devices that are provided with the
					ability to transfer data over a network without requiring human-to-human or
					human-to-computer interaction.
				</Text>
				<Image src={Iot} ml={17} w={326} h={203} mt={24} />

				<Text ml={16} c={"#f6f6f6"} fz={14} mt={40}>
					What we offer?
				</Text>
				<Text ml={16} c={"#e4e8ed"} fz={12} mt={24} w={327} fw={400} lh={"15.8px"}>
					IoT for Process Monitor, Control and Data Logging
					<List>
						<List.Item>
							Introducing Wi-Fi / Ethernet based interfaceable or stand alone IoT modules for
							monitoring, controlling, and Data logging industrial processes. Libratherm offers a
							fully managed back end service along with a customizable WebApp available on PC,
							Smartphones, and Tablets.
						</List.Item>
						<List.Item>
							These modules can capture data from RS-485 enabled hardware or various Analog &
							Digital Sources.
						</List.Item>
					</List>
				</Text>

				<Paper w={1440} h={1080} bg={"white"} mt={48}>
					<Grid justify="flex-start">
						<Grid.Col span={12}>
							<Image src={IOT1} ml={58} w={243} h={144} mt={32} />
						</Grid.Col>
						<Grid.Col span={12}>
							<Image src={IOT1} ml={58} w={243} h={144} mt={40} />
						</Grid.Col>
					</Grid>

					<Text fz={14} fw={600} mt={40} pl={17}>
						Description
					</Text>
					<Text fz={12} w={327} c={"#555459"} ml={17} mt={16}>
						Libratherm offers IoT modules, which allow the user to remotely monitor and control the
						Industrial process directly on the Internet via an Ethernet/Wi-Fi network.
						<br />
						LSD-01 can be used to interface any process controller having an RS485 MODBUS interface
						to capture all the process parameters, which can be monitored using Customized Web-App
						on smart devices like Computer, Tablet or Mobile Phones. <br />
						LSD-02 can be used to directly connect the Industrial sensors such as Pt-100 or T+RH
						sensor/transmitter generating Voltage or Current Signal. The analog process value is
						then monitored through WebApp on the smart devices like Computer, Tablet or Mobile
						Phones. <br />
						At the user end, Internet connectivity must be available preferably over Wi-Fi or over
						an Ethernet for the functioning of these modules.
					</Text>

					<Text fz={14} fw={600} mt={40} pl={17}>
						Key Features
					</Text>
					<Text fz={12} w={327} c={"#555459"} ml={17} mt={16}>
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

				<Text c={"#f6f6f6"} ml={16} w={160} ta={"center"} fz={14} mt={56}>
					IOT App Screen
				</Text>
				<Image src={IOTApp} w={328} h={158} ml={16} mt={32} />
				<Text fz={12} fw={400} w={327} ml={16} mt={24} c={"#f6f6f6"}>
					Libratherm offers IoT modules, which allow the user to remotely monitor and control the
					Industrial process directly on the Internet via an Ethernet/Wi-Fi network. <br />
					LSD-01 can be used to interface any process controller having an RS485 MODBUS interface to
					capture all the process parameters, which can be monitored using Customized Web-App on
					smart devices like Computer, Tablet or Mobile Phones. <br />
					LSD-02 can be used to directly connect the Industrial sensors such as Pt-100 or T+RH
					sensor/transmitter generating Voltage or Current Signal. The analog process value is then
					monitored through WebApp on the smart devices like Computer, Tablet or Mobile Phones.{" "}
					<br />
					At the user end, Internet connectivity must be available preferably over Wi-Fi or over an
					Ethernet for the functioning of these modules. <br />
				</Text>
			</Paper>
		</>
	);
};

export default IOT;

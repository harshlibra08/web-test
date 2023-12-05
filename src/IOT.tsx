import { Paper, Group, Box, Divider, List, Grid, Text, Image, Tabs, Stack } from "@mantine/core";
import React from "react";
import Iot from "./Assets/iot.png";
import IOT1 from "./Assets/iot1.png";
import IOTApp from "./Assets/IotApp.png";
type Props = {};

const IOT = (props: Props) => {
	return (
		<>
			<Paper
				w={{ base: 360, lg: 1440, sm: 1024 }}
				h={{ base: 2600, lg: 3800, sm: 3000 }}
				bg={"black"}
				mt={30}
			>
				<Stack>
					<Text
						fz={{ base: 20, lg: 32, sm: 32 }}
						mt={{ base: 40, lg: 91, sm: 59 }}
						ml={{ base: 16, lg: 114, sm: 144 }}
						c={"#F6F6F6"}
					>
						Services
					</Text>
					<Divider
						size="xs"
						w={{ base: 328, lg: 1212, sm: 736 }}
						ml={{ base: 16, lg: 114, sm: 144 }}
					/>
				</Stack>
				<Tabs
					color="rgba(255, 255, 255, 1)"
					defaultValue="Data"
					ml={{ base: 16, lg: 114, sm: 147 }}
					maw={{ base: 360, lg: 1212, sm: 736 }}
				>
					<Tabs.List>
						<Tabs.Tab value="Data">
							<Text fz={{ base: 9, sm: 14, lg: 14 }} c={"#FFF"} ta={"center"}>
								Data Acquisition Software
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="IOT">
							<Text fz={{ base: 9, sm: 14, lg: 14 }} c={"#FFF"} ta={"center"}>
								IoT (Internet of Things)
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="pwht">
							<Text fz={{ base: 9, sm: 14, lg: 14 }} c={"#FFF"} ta={"center"}>
								Post Weld Heat Treatment (PWHT) Vision
							</Text>
						</Tabs.Tab>
					</Tabs.List>
				</Tabs>

				<Text c={"#f6f6f6"} ta="center" fz={{ base: 14, lg: 32, sm: 28 }} pt={{ base: 64 }}>
					IoT (Internet of Things)
				</Text>
				<Text
					ml={{ base: 16, lg: 217, sm: 144 }}
					c={"#e4e8ed"}
					ta="left"
					fz={{ base: 12 }}
					mt={16}
					w={{ base: 328, lg: 1006, sm: 736 }}
					fw={400}
				>
					The Internet of Things is a system of interrelated devices that are provided with the
					ability to transfer data over a network without requiring human-to-human or
					human-to-computer interaction.
				</Text>
				<Image
					src={Iot}
					ml={{ base: 17, lg: 319, sm: 322 }}
					w={{ base: 326, lg: 802, sm: 380 }}
					h={{ base: 203, lg: 501, sm: 210 }}
					mt={{ base: 24, lg: 64, sm: 80 }}
				/>

				<Text
					ml={{ base: 16, lg: 217, sm: 144 }}
					c={"#f6f6f6"}
					fz={{ base: 14, lg: 24, sm: 24 }}
					mt={{ base: 40, lg: 128, sm: 80 }}
				>
					What we offer?
				</Text>
				<Text
					ml={{ base: 16, lg: 217, sm: 144 }}
					c={"#e4e8ed"}
					fz={{ base: 12, lg: 16, sm: 14 }}
					mt={{ base: 24, lg: 32, sm: 24 }}
					w={{ base: 327, lg: 1006, sm: 736 }}
					fw={400}
				>
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

				<Paper
					w={{ base: 360, lg: 1440, sm: 1024 }}
					h={{ base: 1000, lg: 1014, sm: 924 }}
					bg={"white"}
					mt={{ base: 48, lg: 128, sm: 128 }}
				>
					<Grid justify="flex-start">
						<Grid.Col span={{ base: 12, lg: 6, sm: 6 }}>
							<Image
								src={IOT1}
								ml={{ base: 58, lg: 164, sm: 144 }}
								w={{ base: 243, lg: 437 }}
								h={{ base: 144, lg: 258 }}
								mt={{ base: 32, lg: 128, sm: 128 }}
							/>
						</Grid.Col>
						<Grid.Col span={{ base: 12, lg: 6, sm: 6 }}>
							<Image
								src={IOT1}
								ml={{ base: 58, sm: 14 }}
								w={{ base: 243, lg: 437 }}
								h={{ base: 144, lg: 258 }}
								mt={{ base: 32, lg: 128, sm: 128 }}
							/>
						</Grid.Col>
					</Grid>

					<Text
						fz={{ base: 14, lg: 24, sm: 24 }}
						fw={600}
						mt={{ base: 40, lg: 64, sm: 64 }}
						pl={{ base: 17, lg: 217, sm: 144 }}
					>
						Description
					</Text>
					<Text
						ml={{ base: 16, lg: 217, sm: 144 }}
						c={"#555459"}
						fz={{ base: 12, lg: 16, sm: 14 }}
						mt={{ base: 24, lg: 32, sm: 24 }}
						w={{ base: 327, lg: 1006, sm: 736 }}
						fw={400}
					>
						Libratherm offers IoT modules, which allow the user to remotely monitor and control the
						Industrial process directly on the Internet via an Ethernet/Wi-Fi network.
						<br />
						LSD-01 can be used to interface any process controller having an RS485 MODBUS interface
						to capture all the process parameters, which can be monitored using Customized Web-App
						on smart devices like Computer, Tablet or Mobile Phones. LSD-02 can be used to directly
						connect the Industrial sensors such as Pt-100 or T+RH sensor/transmitter generating
						Voltage or Current Signal. The analog process value is then monitored through WebApp on
						the smart devices like Computer, Tablet or Mobile Phones. At the user end, Internet
						connectivity must be available preferably over Wi-Fi or over an Ethernet for the
						functioning of these modules.
					</Text>

					<Text
						fz={{ base: 14, lg: 24, sm: 24 }}
						fw={600}
						mt={{ base: 40, lg: 64, sm: 64 }}
						pl={{ base: 17, lg: 217, sm: 144 }}
					>
						Key Features
					</Text>
					<Text
						ml={{ base: 16, lg: 217, sm: 144 }}
						c={"#555459"}
						fz={{ base: 12, lg: 16, sm: 14 }}
						mt={{ base: 24, lg: 32, sm: 24 }}
						w={{ base: 327, lg: 1006, sm: 736 }}
						fw={400}
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
				<Paper
					w={{ base: 360, lg: 1440, sm: 1024 }}
					h={{ base: 720, lg: 1176, sm: 982 }}
					bg={"#000"}
				>
					<Text
						fz={{ base: 14, lg: 24, sm: 24 }}
						fw={600}
						mt={{ base: 40, lg: 64, sm: 64 }}
						pl={{ base: 17, lg: 217, sm: 144 }}
						c={"f6f6f6"}
					>
						IOT App Screen
					</Text>
					<Image
						src={IOTApp}
						w={{ base: 328, lg: 1006, sm: 736 }}
						h={{ base: 158, lg: 484, sm: 355 }}
						ml={{ base: 16, lg: 217, sm: 144 }}
						mt={{ base: 32, lg: 64, sm: 54 }}
					/>
					<Text
						ml={{ base: 16, lg: 217, sm: 144 }}
						c={"#f6f6f6"}
						fz={{ base: 12, lg: 16, sm: 14 }}
						mt={{ base: 24, lg: 32, sm: 64 }}
						w={{ base: 327, lg: 1006, sm: 736 }}
						fw={400}
					>
						Libratherm offers IoT modules, which allow the user to remotely monitor and control the
						Industrial process directly on the Internet via an Ethernet/Wi-Fi network. <br />
						LSD-01 can be used to interface any process controller having an RS485 MODBUS interface
						to capture all the process parameters, which can be monitored using Customized Web-App
						on smart devices like Computer, Tablet or Mobile Phones. <br />
						LSD-02 can be used to directly connect the Industrial sensors such as Pt-100 or T+RH
						sensor/transmitter generating Voltage or Current Signal. The analog process value is
						then monitored through WebApp on the smart devices like Computer, Tablet or Mobile
						Phones. <br />
						At the user end, Internet connectivity must be available preferably over Wi-Fi or over
						an Ethernet for the functioning of these modules. <br />
					</Text>
				</Paper>
			</Paper>
			{/**Mobile View */}
			{/* <Paper w={360} h={2800} bg={"black"} hiddenFrom="xs">
				<Group wrap="nowrap">
					<Box w="100%">
						<Text fz={20} mt={91} ml={{ base: 16}} c={"#f6f6f6"}>
							Services
						</Text>
						<Divider size="xs" my={16} ml={{ base: 16}} w={344} />
					</Box>
				</Group>
				<Tabs color="rgba(255, 255, 255, 1)" defaultValue="IOT" ml={{ base: 16}}>
					<Tabs.List>
						<Tabs.Tab value="Data">
							<Text fz={9} ta={"center"} c={"#FFF"}>
								Data Acquisition <br />
								Software
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="IOT">
							<Text fz={9} ta={"center"} c={"#FFF"}>
								IoT (Internet <br /> of Things)
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="pwht">
							<Text fz={9} ta={"center"} c={"#FFF"}>
								Post Weld Heat <br /> Treatment (PWHT) Vision
							</Text>
						</Tabs.Tab>
					</Tabs.List>
				</Tabs>
				<Text c={"#f6f6f6"} ml={{ base: 100}} w={160} ta={"center"} fz={14} pt={40}>
					IoT (Internet of Things)
				</Text>
				<Text ml={{ base: 16}} c={"#e4e8ed"} ta="left" fz={{ base: 12}} mt={{ base:  16}} w={328}>
					The Internet of Things is a system of interrelated devices that are provided with the
					ability to transfer data over a network without requiring human-to-human or
					human-to-computer interaction.
				</Text>
				<Image src={Iot} ml={{ base:  17}} w={326} h={203} mt={{ base:  24}} />

				<Text ml={{ base: 16}} c={"#f6f6f6"} fz={14} mt={{ base:  40}}>
					What we offer?
				</Text>
				<Text ml={{ base: 16}} c={"#e4e8ed"} fz={{ base: 12}} mt={{ base:  24}} w={327} fw={400} lh={"15.8px"}>
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

				<Paper w={1440} h={1080} bg={"white"} mt={{ base:  48}}>
					<Grid justify="flex-start">
						<Grid.Col span={{base:12}}>
							<Image src={IOT1} ml={{ base:  58}} w={243} h={144} mt={{ base:  32}} />
						</Grid.Col>
						<Grid.Col span={{base:12}}>
							<Image src={IOT1} ml={{ base:  58}} w={243} h={144} mt={{ base:  40}} />
						</Grid.Col>
					</Grid>

					<Text fz={14} fw={600} mt={{ base:  40}} pl={{base:17}}>
						Description
					</Text>
					<Text fz={{ base: 12}} w={327} c={"#555459"} ml={{ base:  17}} mt={{ base:  16}}>
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

					<Text fz={14} fw={600} mt={{ base:  40}} pl={{base:17}}>
						Key Features
					</Text>
					<Text fz={{ base: 12}} w={327} c={"#555459"} ml={{ base:  17}} mt={{ base:  16}}>
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

				<Text c={"#f6f6f6"} ml={{ base: 16}} w={160} ta={"center"} fz={14} mt={{base:56}}>
					IOT App Screen
				</Text>
				<Image src={IOTApp} w={328} h={158} ml={{ base: 16}} mt={{ base:  32}} />
				<Text fz={{ base: 12}} fw={400} w={327} ml={{ base: 16}} mt={{ base:  24}} c={"#f6f6f6"}>
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
			</Paper> */}

			{/**Tablet */}
			{/* <Paper w={768} h={2950} bg={"black"} hiddenFrom="md" visibleFrom="xs">
				<Text fz={32} pt={91} ml={90} c={"#f6f6f6"}>
					Services
				</Text>
				<Divider size="md" my={26} w={768} mx={90} />
				<Tabs color="rgba(255, 255, 255, 1)" defaultValue="IOT" ml={90} maw={768}>
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
					IoT (Internet of Things)
				</Text>
				<Text ml={90} c={"#e4e8ed"} ta="center" fz={{ base: 12}} mt={18} w={588} fw={400}>
					The Internet of Things is a system of interrelated devices that are provided with the
					ability to transfer data over a network without requiring human-to-human or
					human-to-computer interaction.
				</Text>
				<Image src={Iot} ml={90} w={588} h={355} mt={{ base:  32}} />

				<Text ml={90} c={"#f6f6f6"} fz={20} mt={64}>
					What we offer?
				</Text>
				<Text ml={90} c={"#e4e8ed"} fz={{ base: 12}} mt={{ base:  24}} w={588} fw={400}>
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

				<Paper w={768} h={1080} bg={"white"} mt={{ base:  48}}>
					<Grid justify="flex-start" pt={128} ml={50}>
						<Grid.Col span={6}>
							<Image src={IOT1} w={294} h={180} />
						</Grid.Col>
						<Grid.Col span={6}>
							<Image src={IOT1} w={294} h={180} />
						</Grid.Col>
					</Grid>

					<Text ml={90} c={"#262728"} fw={600} fz={20} mt={64}>
						Description
					</Text>
					<Text ml={90} c={"#555459"} fz={{ base: 12}} mt={18} w={588} fw={400}>
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

					<Text ml={90} c={"#262728"} fw={600} fz={20} mt={64}>
						Key Features
					</Text>
					<Text ml={90} c={"#555459"} fz={{ base: 12}} mt={18} w={588} fw={400}>
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

				<Text c={"#f6f6f6"} w={588} mx={90} fz={20} pt={40}>
					IOT App Screen
				</Text>
				<Image src={IOTApp} ml={90} w={588} h={355} mt={{ base:  32}} />
				<Text fz={{ base: 12}} fw={400} w={588} ml={90} mt={{ base:  32}} c={"#f6f6f6"}>
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
			</Paper> */}
		</>
	);
};

export default IOT;

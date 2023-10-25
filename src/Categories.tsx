import { Paper, Grid, Box, Group, UnstyledButton, Text, Image } from "@mantine/core";

import React from "react";
import Rect16 from "./Assets/Rectangle 16.png";
import Rect17 from "./Assets/Rectangle 3555.png";

import BluerectangleBg from "./Assets/BlueRectangleBg.png";
import DigitalClock from "./Assets/image 375.png";
import GlassManufacturing from "./Assets/glass-manufacturing.png";
import YellowBg from "./Assets/yellowBg.png";
import GreyBg from "./Assets/greyBg.png";
import GreyBgml from "./Assets/GreyBgLeft.png";
import YellowBgml from "./Assets/YellowBgLeft.png";
import category from "./Assets/category.png";

type Props = {};

const Categories = (props: Props) => {
	return (
		<>
			<Paper w={1440} h={4035} visibleFrom="xs">
				<Grid>
					<Grid.Col span={6}>
						<Box>
							<Text
								fz={32}
								w={558}
								fw={600}
								ml={114}
								mt={105}
								style={{ lineHeight: "51.2px", color: "#292929" }}
							>
								Explore Our Products{" "}
							</Text>
						</Box>
						<Text h={331} w={595} c={"#555459"} fz={14} fw={400} mb={40} mt={32} ml={114}>
							We are one of the most prominent manufacturers and exporters of a broad range of
							microprocessors and digital-based electronic process control instruments. Our product
							range includes Temperature and Process Indicators, Large/Jumbo Display Indicators,
							Portable Thermometers, Process Controllers such as On-Off Controllers, PID
							Controllers, Ramp/Soak Controllers, and Multi Zone Controllers, Temperature and
							Process Data Loggers and Scanners, Temperature, Humidity Sensors and Transmitters.
							<br />
							<br />
							We also have Indicators, and Controllers, Clean Room Monitoring Systems for
							Environment, Cold Storage, Data Centre, Server Room, Greenhouse, Warehouse to measure
							Temperature, Humidity, and Differential Pressure. <br />
							<br />
							Thyristor Triggering Cards, Thyristor Power Controllers, Signal
							Converters/Conditioners and Isolators, Molten Metal Pyrometers, DC Motor Controllers,
							Motor Soft Starters, IoT Modules, Instrumentation Control Panels, Data Acquisition
							Software, Customized Instruments, and many more services.
						</Text>
					</Grid.Col>
					<Grid.Col span={6}>
						<Image src={Rect16} bg={"white"} w={509} h={624} pos={"absolute"} ml={203} />

						<Image src={category} alt="Sample" w={543} h={424} pos={"absolute"} mt={96} ml={123} />
					</Grid.Col>
				</Grid>

				<Paper w={1440} h={625} mt={65}>
					<Grid gutter="lg">
						<Grid.Col span={6}>
							<Image src={GreyBg} alt="Vision" h={625} w={505} pos="absolute" pl={0} />
							<Image
								src={DigitalClock}
								alt="Vision"
								w={543}
								h={424}
								pos={"absolute"}
								ml={64}
								mt={114}
							/>
						</Grid.Col>

						<Grid.Col span={6}>
							<Text fz={32} h={44} fw={600} mt={134} c={"#292929"}>
								Digital Indicators
							</Text>
							<Text h={110} w={596} c={"#555459"} fz={14} fw={400} mb={40} mr={114} mt={24}>
								Experts in lighting, we’ve been creating task lights, desk lamps and table lamps for
								over 80 years. All our lamps uphold the original Anglepoise design concept whilst
								incorporating essential modern features. You’ll probably recognise some of the
								classic profiles when browsing our wide range.
								<br />
								<br />
								You’ll probably recognise some of the classic profiles when browsing our wide range.
								Whether you’re looking to add style to your workspace with a modern office desk
								lamp, a small desk lamp for tight spaces or, a reading lamp for an ambient study
								glow, you’ll find the right table and desk lamp for you.
							</Text>
							<UnstyledButton>
								<Group>
									<Text fz={20} color="black" mt={102} fw={400}>
										View
									</Text>
								</Group>
							</UnstyledButton>
						</Grid.Col>
					</Grid>
				</Paper>

				<Grid gutter="lg">
					<Grid.Col span={6}>
						<Box>
							<Text fz={32} w={558} ml={114} fw={600} mt={136} c={"#292929"}>
								Thyristor Power Controller
							</Text>
						</Box>
						<Text w={595} c={"#555459"} fz={14} fw={400} mb={40} ml={114} mt={32}>
							Libratherm offers ready to use SCR Power Controller for electrical heating loads
							ranging from 5 KW (Single Phase) to 360KW (Three Phase). This Thyristor Power
							Regulator Module comprises of suitable triggering card model LTC-12 or LTC-13 or
							LTC-15 or LTC-18, suitably rated back to back connected SCR Modules (with electrically
							isolated base, mounted on the heat sink, input and output clip-on type heavy-duty
							connectors or aluminum/copper bus bars, semiconductor fuses and thermal cutouts.
							<br />
							<br />
							The entire assembly is mounted on an MS powder-coated enclosure, which in turn can be
							easily mounted inside the closed control panel as desired.
						</Text>
						<UnstyledButton>
							<Text fz={20} style={{ color: "#000" }} fw={400} ml={114} mt={24}>
								Shop Now
							</Text>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={6}>
						<Image src={YellowBg} w={505} h={624} pos={"absolute"} ml={207} mt={64} />

						<Image src={GlassManufacturing} w={543} h={424} pos={"absolute"} ml={125} mt={160} />
					</Grid.Col>
				</Grid>

				<Grid gutter="lg" mt={222}>
					<Grid.Col span={6}>
						<Image
							src={BluerectangleBg}
							alt="Vision"
							h={625}
							w={505}
							pos="absolute"
							pl={0}
							ml={0}
						/>
						<Image
							src={DigitalClock}
							alt="Vision"
							w={543}
							h={424}
							pos={"absolute"}
							ml={114}
							mt={114}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Text fz={32} w={596} h={44} fw={600} mr={114} mt={134} c={"#292929"}>
							Digital Indicators
						</Text>
						<Text h={110} w={596} c={"#555459"} fz={14} fw={400} mb={40} mr={114} mt={24}>
							Experts in lighting, we’ve been creating task lights, desk lamps and table lamps for
							over 80 years. All our lamps uphold the original Anglepoise design concept whilst
							incorporating essential modern features. You’ll probably recognise some of the classic
							profiles when browsing our wide range.
							<br />
							<br />
							You’ll probably recognise some of the classic profiles when browsing our wide range.
							Whether you’re looking to add style to your workspace with a modern office desk lamp,
							a small desk lamp for tight spaces or, a reading lamp for an ambient study glow,
							you’ll find the right table and desk lamp for you.
						</Text>
						<UnstyledButton>
							<Group>
								<Text fz={20} mt={102} fw={400} style={{ color: "#000" }}>
									Shop Now
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
				</Grid>

				<Grid gutter="lg" mt={150}>
					<Grid.Col span={6} mt={137}>
						<Box>
							<Text fz={32} w={558} h={102} fw={600} pt={105} ml={114} c={"#292929"}>
								Humidity Instruments
							</Text>
						</Box>
						<Text w={595} ml={114} c={"#555459"} fz={14} fw={400} mb={40} pt={85}>
							Experts in lighting, we’ve been creating task lights, desk lamps and table lamps for
							over 80 years. All our lamps uphold the original Anglepoise design concept whilst
							incorporating essential modern features. You’ll probably recognise some of the classic
							profiles when browsing our wide range.
							<br />
							<br />
							You’ll probably recognise some of the classic profiles when browsing our wide range.
							Whether you’re looking to add style to your workspace with a modern office desk lamp,
							a small desk lamp for tight spaces or, a reading lamp for an ambient study glow,
							you’ll find the right table and desk lamp for you.
						</Text>
						<UnstyledButton>
							<Text fz={20} ml={114} fw={400} style={{ color: "#000" }}>
								Shop Now
							</Text>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={6}>
						<Image src={GreyBgml} bg={"white"} w={505} h={624} pos={"absolute"} mt={135} ml={227} />

						<Image src={category} alt="Sample" w={543} h={424} pos={"absolute"} mt={200} ml={125} />
					</Grid.Col>
				</Grid>

				<Grid gutter="lg" mt={220}>
					<Grid.Col span={6}>
						<Image src={YellowBgml} alt="Vision" h={625} w={505} pos="absolute" pl={0} ml={0} />
						<Image
							src={DigitalClock}
							alt="Vision"
							w={543}
							h={424}
							pos={"absolute"}
							ml={114}
							mt={114}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Text fz={32} w={596} h={44} fw={600} mr={114} mt={134} c={"#292929"}>
							Signal Isolators & Conditioners
						</Text>
						<Text h={110} w={596} c={"#555459"} fz={14} fw={400} mb={40} mt={24}>
							Experts in lighting, we’ve been creating task lights, desk lamps and table lamps for
							over 80 years. All our lamps uphold the original Anglepoise design concept whilst
							incorporating essential modern features. You’ll probably recognise some of the classic
							profiles when browsing our wide range.
							<br />
							<br />
							You’ll probably recognise some of the classic profiles when browsing our wide range.
							Whether you’re looking to add style to your workspace with a modern office desk lamp,
							a small desk lamp for tight spaces or, a reading lamp for an ambient study glow,
							you’ll find the right table and desk lamp for you.
						</Text>
						<UnstyledButton>
							<Group>
								<Text fz={20} color="black" mt={102} fw={400}>
									Shop Now
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
			</Paper>
			{/**MOBILE VIEW */}
			<Paper w={1440} h={2335} hiddenFrom="xs" mt={30}>
				<Grid>
					<Grid.Col span={12}>
						<Image src={Rect17} w={260} h={289} mt={51} ml={100} pos={"absolute"} />

						<Image src={category} w={328} h={241} mt={75} ml={16} pos={"absolute"} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={20} fw={600} ml={16} mt={364} c={"#292929"}>
							Explore Our Products{" "}
						</Text>

						<Text w={321} c={"#555459"} fz={12} fw={400} mt={16} ml={16} lineClamp={4}>
							We are one of the most prominent manufacturers and exporters of a broad range of
							microprocessors and digital-based electronic process control instruments. Our product
							range includes Temperature and Process Indicators, Large/Jumbo Display Indicators,
							Portable Thermometers, Process Controllers such as On-Off Controllers, PID
							Controllers, Ramp/Soak Controllers, and Multi Zone Controllers, Temperature and
							Process Data Loggers and Scanners, Temperature, Humidity Sensors and Transmitters.
							<br />
							<br />
							We also have Indicators, and Controllers, Clean Room Monitoring Systems for
							Environment, Cold Storage, Data Centre, Server Room, Greenhouse, Warehouse to measure
							Temperature, Humidity, and Differential Pressure. <br />
							<br />
							Thyristor Triggering Cards, Thyristor Power Controllers, Signal
							Converters/Conditioners and Isolators, Molten Metal Pyrometers, DC Motor Controllers,
							Motor Soft Starters, IoT Modules, Instrumentation Control Panels, Data Acquisition
							Software, Customized Instruments, and many more services.
						</Text>
						<UnstyledButton ml={16} mt={12}>
							<Text fz={12} c={"#828282"}>
								Read More
							</Text>
						</UnstyledButton>
					</Grid.Col>
				</Grid>

				<Grid>
					<Grid.Col span={12}>
						<Image src={GlassManufacturing} w={344} h={166} ml={16} mt={67} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={20} ml={16} fw={600} mt={25} c={"#292929"}>
							Thyristor Power Controller
						</Text>

						<Text w={328} c={"#555459"} fz={12} fw={400} ml={16} mt={8} lineClamp={2}>
							Libratherm offers ready to use SCR Power Controller for electrical heating loads
							ranging from 5 KW (Single Phase) to 360KW (Three Phase). This Thyristor Power
							Regulator Module comprises of suitable triggering card model LTC-12 or LTC-13 or
							LTC-15 or LTC-18, suitably rated back to back connected SCR Modules (with electrically
							isolated base, mounted on the heat sink, input and output clip-on type heavy-duty
							connectors or aluminum/copper bus bars, semiconductor fuses and thermal cutouts.
							<br />
							<br />
							The entire assembly is mounted on an MS powder-coated enclosure, which in turn can be
							easily mounted inside the closed control panel as desired.
						</Text>
						<UnstyledButton>
							<Text fz={12} fw={400} ml={16} mt={15}>
								Shop Now
							</Text>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={12}>
						<Image src={category} w={344} h={166} ml={16} mt={67} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={20} ml={16} fw={600} mt={25} c={"#292929"}>
							Thyristor Power Controller
						</Text>

						<Text w={328} c={"#555459"} fz={12} fw={400} ml={16} mt={8} lineClamp={2}>
							Libratherm offers ready to use SCR Power Controller for electrical heating loads
							ranging from 5 KW (Single Phase) to 360KW (Three Phase). This Thyristor Power
							Regulator Module comprises of suitable triggering card model LTC-12 or LTC-13 or
							LTC-15 or LTC-18, suitably rated back to back connected SCR Modules (with electrically
							isolated base, mounted on the heat sink, input and output clip-on type heavy-duty
							connectors or aluminum/copper bus bars, semiconductor fuses and thermal cutouts.
							<br />
							<br />
							The entire assembly is mounted on an MS powder-coated enclosure, which in turn can be
							easily mounted inside the closed control panel as desired.
						</Text>
						<UnstyledButton>
							<Text fz={12} fw={400} ml={16} mt={15}>
								Shop Now
							</Text>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={12}>
						<Image src={GlassManufacturing} w={344} h={166} ml={16} mt={67} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={20} ml={16} fw={600} mt={25} c={"#292929"}>
							Thyristor Power Controller
						</Text>

						<Text w={328} c={"#555459"} fz={12} fw={400} ml={16} mt={8} lineClamp={2}>
							Libratherm offers ready to use SCR Power Controller for electrical heating loads
							ranging from 5 KW (Single Phase) to 360KW (Three Phase). This Thyristor Power
							Regulator Module comprises of suitable triggering card model LTC-12 or LTC-13 or
							LTC-15 or LTC-18, suitably rated back to back connected SCR Modules (with electrically
							isolated base, mounted on the heat sink, input and output clip-on type heavy-duty
							connectors or aluminum/copper bus bars, semiconductor fuses and thermal cutouts.
							<br />
							<br />
							The entire assembly is mounted on an MS powder-coated enclosure, which in turn can be
							easily mounted inside the closed control panel as desired.
						</Text>
						<UnstyledButton>
							<Text fz={12} fw={400} ml={16} mt={15}>
								Shop Now
							</Text>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={12}>
						<Image src={category} w={344} h={166} ml={16} mt={67} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={20} ml={16} fw={600} mt={25} c={"#292929"}>
							Thyristor Power Controller
						</Text>

						<Text w={328} c={"#555459"} fz={12} fw={400} ml={16} mt={8} lineClamp={2}>
							Libratherm offers ready to use SCR Power Controller for electrical heating loads
							ranging from 5 KW (Single Phase) to 360KW (Three Phase). This Thyristor Power
							Regulator Module comprises of suitable triggering card model LTC-12 or LTC-13 or
							LTC-15 or LTC-18, suitably rated back to back connected SCR Modules (with electrically
							isolated base, mounted on the heat sink, input and output clip-on type heavy-duty
							connectors or aluminum/copper bus bars, semiconductor fuses and thermal cutouts.
							<br />
							<br />
							The entire assembly is mounted on an MS powder-coated enclosure, which in turn can be
							easily mounted inside the closed control panel as desired.
						</Text>
						<UnstyledButton>
							<Text fz={12} fw={400} ml={16} mt={15}>
								Shop Now
							</Text>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
			</Paper>
		</>
	);
};

export default Categories;

import {
	Paper,
	Group,
	Box,
	Divider,
	Grid,
	UnstyledButton,
	Text,
	Image,
	Container,
} from "@mantine/core";
import React from "react";
import WhiteBG from "./Assets/Group 1000003515.png";
import SCR from "./Assets/scr.png";
import PhaseAngel from "./Assets/Phaseangle.png";
import TPC from "./Assets/TPC.png";

type Props = {};

const Application = (props: Props) => {
	return (
		<>
			<Paper w={1440} h={3847} bg={"black"} visibleFrom="xs">
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text fz={32} mt={91} ml={114} c={"#f6f6f6"}>
							Application
						</Text>
						<Divider fz={16} my={23} mr={114} ml={114} pb={40} />
					</Box>
				</Group>
				<Grid>
					<Grid.Col span={4}>
						<Box pos="relative" w={1200} h={280}>
							<Image src={WhiteBG} h={327} w={358} pos="absolute" ml={114} />
							<Text c={"#e4e8ed"} fz={16} ml={530} mt={98}>
								22nd January, 2023.
							</Text>
							<Text c={"#f6f6f6"} fz={32} ml={530} mt={16}>
								SCR Power Regulators{" "}
							</Text>
							<Text c={"#e4e8ed"} fz={16} ml={530} mt={16} w={868} lineClamp={2}>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Group>
									<Text fz={20} style={{ color: "#FFFFFF" }} ml={530} mt={32} fw={400}>
										Read more
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={4} pt={120}>
						<Box pos="relative" w={1200} h={280}>
							<Image src={WhiteBG} h={327} w={358} pos="absolute" ml={114} />
							<Text c={"#e4e8ed"} fz={16} ml={530} mt={98}>
								22nd January, 2023.
							</Text>
							<Text c={"#f6f6f6"} fz={32} ml={530} mt={16}>
								SCR Triggering Cards for OEM{" "}
							</Text>
							<Text c={"#e4e8ed"} fz={16} ml={530} mt={16} w={868} lineClamp={2}>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Group>
									<Text fz={20} style={{ color: "#FFFFFF" }} ml={530} mt={32} fw={400}>
										Read more
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={4} pt={120}>
						<Box pos="relative" w={1200} h={280}>
							<Image src={WhiteBG} h={327} w={358} pos="absolute" ml={114} />
							<Text c={"#e4e8ed"} fz={16} ml={530} mt={98}>
								22nd January, 2023.
							</Text>
							<Text c={"#f6f6f6"} fz={32} ml={530} mt={16}>
								Thyristor Power Switches{" "}
							</Text>
							<Text c={"#e4e8ed"} fz={16} ml={530} mt={16} w={868} lineClamp={2}>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Group>
									<Text fz={20} style={{ color: "#FFFFFF" }} ml={530} mt={32} fw={400}>
										Read more
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={4} pt={120}>
						<Box pos="relative" w={1200} h={280}>
							<Image src={WhiteBG} h={327} w={358} pos="absolute" ml={114} />
							<Text c={"#e4e8ed"} fz={16} ml={530} mt={98}>
								22nd January, 2023.
							</Text>
							<Text c={"#f6f6f6"} fz={32} ml={530} mt={16}>
								Phase Angle Control vs Zero Crossover{" "}
							</Text>
							<Text c={"#e4e8ed"} fz={16} ml={530} mt={16} w={868} lineClamp={2}>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Group>
									<Text fz={20} style={{ color: "#FFFFFF" }} ml={530} mt={32} fw={400}>
										Read more
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={4} pt={120}>
						<Box pos="relative" w={1200} h={280}>
							<Image src={WhiteBG} h={327} w={358} pos="absolute" ml={114} />
							<Text c={"#e4e8ed"} fz={16} ml={530} mt={98}>
								22nd January, 2023.
							</Text>
							<Text c={"#f6f6f6"} fz={32} ml={530} mt={16}>
								Multizone Heating System{" "}
							</Text>
							<Text c={"#e4e8ed"} fz={16} ml={530} mt={16} w={868} lineClamp={2}>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Group>
									<Text fz={20} style={{ color: "#FFFFFF" }} ml={530} mt={32} fw={400}>
										Read more
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={4} pt={120}>
						<Box pos="relative" w={1200} h={280}>
							<Image src={WhiteBG} h={327} w={358} pos="absolute" ml={114} />
							<Text c={"#e4e8ed"} fz={16} ml={530} mt={98}>
								22nd January, 2023.
							</Text>
							<Text c={"#f6f6f6"} fz={32} ml={530} mt={16}>
								Multizone Heating System{" "}
							</Text>
							<Text c={"#e4e8ed"} fz={16} ml={530} mt={16} w={868} lineClamp={2}>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Group>
									<Text fz={20} style={{ color: "#FFFFFF" }} ml={530} mt={32} fw={400}>
										Read more
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={4} pt={120}>
						<Box pos="relative" w={1200} h={280}>
							<Image src={WhiteBG} h={327} w={358} pos="absolute" ml={114} />
							<Text c={"#e4e8ed"} fz={16} ml={530} mt={98}>
								22nd January, 2023.
							</Text>
							<Text c={"#f6f6f6"} fz={32} ml={530} mt={16}>
								Temperature Controller{" "}
							</Text>
							<Text c={"#e4e8ed"} fz={16} ml={530} mt={16} w={868} lineClamp={2}>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Group>
									<Text fz={20} style={{ color: "#FFFFFF" }} ml={530} mt={32} fw={400}>
										Read more
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
			</Paper>
			<Paper w={1440} h={3850} bg={"black"} visibleFrom="xs">
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text fz={32} mt={91} ml={114} c={"#f6f6f6"}>
							Application
						</Text>
						<Divider fz={16} my={23} mr={114} ml={114} pb={40} />
					</Box>
				</Group>
				<Container>
					<Image src={SCR} w={1000} h={422} mx={"auto"} />

					<Text c={"#f6f6f6"} ta="left" fz={32} pt={64}>
						SCR Power Regulators
					</Text>
					<Text c={"#e4e8ed"} ta="left" fz={16} pt={34} w={1006} fw={400}>
						Power Controllers for Precise Voltage and Current Control : SCR Power Regulators, also
						known as Thyristor Power Controllers are devices that control power delivery. They are
						designed to vary the AC voltage across resistive and inductive loads. The primary
						controlling device is a back-to-back connected Silicon Rectifier (SCR) or Thyristor.
						They are coupled with the triggering electronics from Libratherm which provide gate
						cathode triggering pulses proportional to the control signal. This controls the
						conduction angle of the thyristor which controls the average AC voltage across the load.
						Regulating the AC voltage controls the AC current drawn by the load and thereby controls
						the power delivered to the load.
					</Text>
				</Container>
				<Paper w={1440} h={1612} withBorder bg={"white"} mt={128}>
					<Image src={PhaseAngel} w={1000} h={171} mx={"auto"} mt={98} />

					<Text fz={32} fw={600} pt={64} pl={217} c={"#262728"}>
						Why use Thyristor Power Controllers?
					</Text>
					<Text fz={16} fw={"400"} w={"85%"} pl={217} pt={32} c={"#555459"}>
						The Thyristor Power Controller can accurately and consistently control the process
						proportional to the control signal. They provide a smooth way of controlling the power
						delivered to the load. Unlike Contactors, thyristors don’t have any electromechanical
						movement which may cause arcing/sparking and carbon formation. They gradually deliver
						power to the load and prevent electrical surges, and transients, thereby enhancing the
						operational life of the load. Libratherm offers Thyristor Power Controllers ranging from
						10A to 1000A load. Select models have a built-in current limit and current trip feature
						which safeguards against overload damages. They can be paired with Libratherm PID
						Controllers and Ramp Soak Controllers for precise temperature control for various
						applications.
					</Text>

					<Image src={TPC} w={979} h={409} mx={"auto"} mt={64} />

					<Text fz={16} pl={217} pt={64} c={"#555459"}>
						Some of the applications where Libratherm's Power Controllers are successfully
						implemented:
						<li>Aluminium Melting Furnaces</li>
						<li>Holding Furnaces</li>
						<li>Air Handling Units</li>
						<li>Dehumidifiers</li>
						<li>Boilers</li>
						<li>Hot Air Generators and Hot Air Dryers</li>
						<li>
							Very high temperature furnaces built using Silicon Carbide/MoSi2 heating elements
						</li>
						<li>Microwave dryers</li>
						<li>Multi-zone Drying and Curing Ovens</li>
						<li>Heat Transfer Printing Machines</li>
						<li>
							Food Grains, Paper and Printing Drying Ovens made using Quartz tube Medium wave IR and
							Ceramic coated IR heaters
						</li>
						<li>Pet bottles Pre Forms preheating tunnel ovens made using IR heaters</li>
						<li>Plastic Injection moulding requiring multi-zone heating for manifold moulds</li>
						<li>Plastic Pipes and Sheets extrusion</li>
						<li>Metal sheets welding systems</li>
					</Text>
				</Paper>

				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text fz={32} mt={128} ml={114} c={"#f6f6f6"}>
							Related Post
						</Text>
					</Box>
				</Group>

				<Group justify="center">
					<Box pos="relative" w={391} h={650} bg={"black"}>
						<Image src={WhiteBG} h={270} w={391} pos="absolute" top={26} />
						<Text fw={400} h={92} w={347} fz={32} pos="absolute" mt={350} c={"#f6f6f6"}>
							Industries
						</Text>

						<Text size="16px" fw={400} w={391} pos="absolute" top={414} c={"#e4e8ed"} lineClamp={3}>
							Libratherm has supplied various types of temperature controllers, thyristor power
							controllers and control panels to the industries manufacturing Files, Diamond Tools,
							Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
							blades etc… The temperature of the electrical or fuel fired heating systems, used for
							annealing, hardening, steam bluing and similar such processes, has been in use for
							precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
							DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
							contact sensors.
						</Text>
						<UnstyledButton pos={"absolute"} mt={463}>
							<Text size="20px" style={{ color: "#FFFFFF" }} mt={32} fw={400}>
								Know more
							</Text>
						</UnstyledButton>
					</Box>

					<Box pos="relative" w={391} h={650} bg={"black"}>
						<Image src={WhiteBG} h={270} w={391} pos="absolute" top={26} />
						<Text fw={400} h={92} w={347} fz={32} pos="absolute" mt={350} c={"#f6f6f6"}>
							Services
						</Text>

						<Text size="16px" fw={400} w={391} pos="absolute" top={414} c={"#e4e8ed"} lineClamp={3}>
							Libratherm has supplied various types of temperature controllers, thyristor power
							controllers and control panels to the industries manufacturing Files, Diamond Tools,
							Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
							blades etc… The temperature of the electrical or fuel fired heating systems, used for
							annealing, hardening, steam bluing and similar such processes, has been in use for
							precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
							DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
							contact sensors.
						</Text>
						<UnstyledButton pos={"absolute"} mt={463}>
							<Text size="20px" style={{ color: "#FFFFFF" }} mt={32} fw={400}>
								Know more
							</Text>
						</UnstyledButton>
					</Box>

					<Box pos="relative" w={391} h={650} bg={"black"}>
						<Image src={WhiteBG} h={270} w={391} pos="absolute" top={26} />
						<Text fw={400} h={92} w={347} fz={32} pos="absolute" mt={350} c={"#f6f6f6"}>
							Applications
						</Text>

						<Text size="16px" fw={400} w={391} pos="absolute" top={414} c={"#e4e8ed"} lineClamp={3}>
							Libratherm has supplied various types of temperature controllers, thyristor power
							controllers and control panels to the industries manufacturing Files, Diamond Tools,
							Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
							blades etc… The temperature of the electrical or fuel fired heating systems, used for
							annealing, hardening, steam bluing and similar such processes, has been in use for
							precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
							DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
							contact sensors.
						</Text>
						<UnstyledButton pos={"absolute"} mt={463}>
							<Text size="20px" style={{ color: "#FFFFFF" }} mt={32} fw={400}>
								Know more
							</Text>
						</UnstyledButton>
					</Box>
				</Group>
			</Paper>

			{/**Mobile view */}
			<Paper w={1440} h={2347} bg={"black"} hiddenFrom="xs">
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text fz={20} mt={60} ml={16} c={"#f6f6f6"}>
							Application
						</Text>
						<Divider ml={16} size={"xs"} w={328} mt={18} />
					</Box>
				</Group>
				<Grid>
					<Grid.Col span={12}>
						<Image src={WhiteBG} mt={40} ml={16} h={300} w={328} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text c={"#e4e8ed"} fz={12} ml={17} mt={16}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={18} mt={16} ml={16}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={12} mt={12} lineClamp={2} ml={16} w={325}>
							Libratherm has supplied various types of temperature controllers, thyristor power
							controllers and control panels to the industries manufacturing Files, Diamond Tools,
							Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
							blades etc… The temperature of the electrical or fuel fired heating systems, used for
							annealing, hardening, steam bluing and similar such processes, has been in use for
							precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
							DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
							contact sensors.
						</Text>
						<UnstyledButton>
							<Group>
								<Text fz={15} c={"#ffffff"} mt={8} fw={400} ml={16}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={12}>
						<Image src={WhiteBG} mt={40} ml={16} h={300} w={328} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text c={"#e4e8ed"} fz={12} ml={17} mt={16}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={18} mt={16} ml={16}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={12} mt={12} lineClamp={2} ml={16} w={325}>
							Libratherm has supplied various types of temperature controllers, thyristor power
							controllers and control panels to the industries manufacturing Files, Diamond Tools,
							Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
							blades etc… The temperature of the electrical or fuel fired heating systems, used for
							annealing, hardening, steam bluing and similar such processes, has been in use for
							precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
							DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
							contact sensors.
						</Text>
						<UnstyledButton>
							<Group>
								<Text fz={15} c={"#ffffff"} mt={8} fw={400} ml={16}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={12}>
						<Image src={WhiteBG} mt={40} ml={16} h={300} w={328} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text c={"#e4e8ed"} fz={12} ml={17} mt={16}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={18} mt={16} ml={16}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={12} mt={12} lineClamp={2} ml={16} w={325}>
							Libratherm has supplied various types of temperature controllers, thyristor power
							controllers and control panels to the industries manufacturing Files, Diamond Tools,
							Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
							blades etc… The temperature of the electrical or fuel fired heating systems, used for
							annealing, hardening, steam bluing and similar such processes, has been in use for
							precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
							DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
							contact sensors.
						</Text>
						<UnstyledButton>
							<Group>
								<Text fz={15} c={"#ffffff"} mt={8} fw={400} ml={16}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={12}>
						<Image src={WhiteBG} mt={40} ml={16} h={300} w={328} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text c={"#e4e8ed"} fz={12} ml={17} mt={16}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={18} mt={16} ml={16}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={12} mt={12} lineClamp={2} ml={16} w={325}>
							Libratherm has supplied various types of temperature controllers, thyristor power
							controllers and control panels to the industries manufacturing Files, Diamond Tools,
							Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
							blades etc… The temperature of the electrical or fuel fired heating systems, used for
							annealing, hardening, steam bluing and similar such processes, has been in use for
							precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
							DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
							contact sensors.
						</Text>
						<UnstyledButton>
							<Group>
								<Text fz={15} c={"#ffffff"} mt={8} fw={400} ml={16}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
			</Paper>
			<Paper w={1440} h={2850} bg={"black"} hiddenFrom="xs">
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text fz={20} mt={60} ml={16} c={"#f6f6f6"}>
							Application
						</Text>
						<Divider ml={16} size={"xs"} w={328} mt={18} />
					</Box>
				</Group>

				<Image src={SCR} w={277} h={117} mt={41} ml={42} />

				<Text c={"#f6f6f6"} fz={20} ml={16} mt={24}>
					SCR Power Regulators
				</Text>
				<Text c={"#e4e8ed"} fz={12} pt={16} w={328} ml={16} fw={400}>
					Power Controllers for Precise Voltage and Current Control : SCR Power Regulators, also
					known as Thyristor Power Controllers are devices that control power delivery. They are
					designed to vary the AC voltage across resistive and inductive loads. The primary
					controlling device is a back-to-back connected Silicon Rectifier (SCR) or Thyristor. They
					are coupled with the triggering electronics from Libratherm which provide gate cathode
					triggering pulses proportional to the control signal. This controls the conduction angle
					of the thyristor which controls the average AC voltage across the load. Regulating the AC
					voltage controls the AC current drawn by the load and thereby controls the power delivered
					to the load.
				</Text>

				<Paper w={1440} h={1280} withBorder bg={"white"} mt={128}>
					<Image src={PhaseAngel} w={329} h={57} ml={15} mt={64} />

					<Text fz={20} w={294} fw={600} mt={32} ml={28} c={"#262728"}>
						Why use Thyristor Power Controllers?
					</Text>
					<Text fz={12} fw={400} w={305} ml={28} mt={16} c={"#555459"}>
						The Thyristor Power Controller can accurately and consistently control the process
						proportional to the control signal. They provide a smooth way of controlling the power
						delivered to the load. Unlike Contactors, thyristors don’t have any electromechanical
						movement which may cause arcing/sparking and carbon formation. They gradually deliver
						power to the load and prevent electrical surges, and transients, thereby enhancing the
						operational life of the load. Libratherm offers Thyristor Power Controllers ranging from
						10A to 1000A load. Select models have a built-in current limit and current trip feature
						which safeguards against overload damages. They can be paired with Libratherm PID
						Controllers and Ramp Soak Controllers for precise temperature control for various
						applications.
					</Text>

					<Image src={TPC} w={332} h={155} mt={40} ml={15} />

					<Text fz={12} ml={16} mt={40} c={"#555459"} w={328}>
						Some of the applications where Libratherm's Power Controllers are successfully
						implemented:
						<li>Aluminium Melting Furnaces</li>
						<li>Holding Furnaces</li>
						<li>Air Handling Units</li>
						<li>Dehumidifiers</li>
						<li>Boilers</li>
						<li>Hot Air Generators and Hot Air Dryers</li>
						<li>
							Very high temperature furnaces built using Silicon Carbide/MoSi2 heating elements
						</li>
						<li>Microwave dryers</li>
						<li>Multi-zone Drying and Curing Ovens</li>
						<li>Heat Transfer Printing Machines</li>
						<li>
							Food Grains, Paper and Printing Drying Ovens made using Quartz tube Medium wave IR and
							Ceramic coated IR heaters
						</li>
						<li>Pet bottles Pre Forms preheating tunnel ovens made using IR heaters</li>
						<li>Plastic Injection moulding requiring multi-zone heating for manifold moulds</li>
						<li>Plastic Pipes and Sheets extrusion</li>
						<li>Metal sheets welding systems</li>
					</Text>
				</Paper>

				<Text fz={20} mt={64} ml={16} c={"#f6f6f6"}>
					Related Post
				</Text>

				<Image src={WhiteBG} h={212} ml={32} w={296} mt={40} />
				<Text fw={400} w={347} fz={18} mt={48} ml={16} c={"#f6f6f6"}>
					SCR Power Regulators
				</Text>

				<Text fz={12} fw={400} w={325} ml={16} c={"#e4e8ed"} lineClamp={3} mt={12}>
					Libratherm has supplied various types of temperature controllers, thyristor power
					controllers and control panels to the industries manufacturing Files, Diamond Tools,
					Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular blades
					etc… The temperature of the electrical or fuel fired heating systems, used for annealing,
					hardening, steam bluing and similar such processes, has been in use for precise control up
					to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723, DLC-301, POW-3/S and
					POW-3/D with the sensor input from thermocouples or infrared non contact sensors.
				</Text>
				<UnstyledButton>
					<Text fz={15} c={"#FFFFFF"} mt={32} fw={400} ml={16}>
						Read more
					</Text>
				</UnstyledButton>
			</Paper>
		</>
	);
};

export default Application;

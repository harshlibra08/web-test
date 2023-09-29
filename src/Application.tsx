import {
	Paper,
	Group,
	Box,
	Divider,
	Grid,
	UnstyledButton,
	Text,
	Image,
	Card,
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
			<Paper w={1440} h={3547} withBorder bg={"black"}>
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text size={"32px"} mt={91} ml={114} color="#F6F6F6">
							Application
						</Text>
						<Divider size="md" my={23} mr={114} ml={114} pb={40} />
					</Box>
				</Group>
				<Grid>
					<Grid.Col span={4}>
						<Box pos="relative" w={1200} h={280}>
							<Image src={WhiteBG} height={327} width={358} pos="absolute" top={64} left={116} />
							<Text color="#E4E8ED" size="md" ml={530} pt={128}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size="lg" ml={530} mt={16}>
								SCR Power Regulators{" "}
							</Text>
							<Text color="#E4E8ED" size="md" ml={530} mt={16} w={868} lineClamp={2}>
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
									<Text size="20px" color="white" ml={530} mt={32} fw={400}>
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
							<Image src={WhiteBG} height={327} width={358} pos="absolute" top={64} left={116} />
							<Text color="#E4E8ED" size="md" ml={530} pt={128}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size="lg" ml={530} mt={16}>
								SCR Triggering Cards for OEM{" "}
							</Text>
							<Text color="#E4E8ED" size="md" ml={530} mt={16} w={868} lineClamp={2}>
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
									<Text size="20px" color="white" ml={530} mt={32} fw={400}>
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
							<Image src={WhiteBG} height={327} width={358} pos="absolute" top={64} left={116} />
							<Text color="#E4E8ED" size="md" ml={530} pt={128}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size="lg" ml={530} mt={16}>
								Thyristor Power Switches{" "}
							</Text>
							<Text color="#E4E8ED" size="md" ml={530} mt={16} w={868} lineClamp={2}>
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
									<Text size="20px" color="white" ml={530} mt={32} fw={400}>
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
							<Image src={WhiteBG} height={327} width={358} pos="absolute" top={64} left={116} />
							<Text color="#E4E8ED" size="md" ml={530} pt={128}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size="lg" ml={530} mt={16}>
								Phase Angle Control vs Zero Crossover{" "}
							</Text>
							<Text color="#E4E8ED" size="md" ml={530} mt={16} w={868} lineClamp={2}>
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
									<Text size="20px" color="white" ml={530} mt={32} fw={400}>
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
							<Image src={WhiteBG} height={327} width={358} pos="absolute" top={64} left={116} />
							<Text color="#E4E8ED" size="md" ml={530} pt={128}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size="lg" ml={530} mt={16}>
								Multizone Heating System{" "}
							</Text>
							<Text color="#E4E8ED" size="md" ml={530} mt={16} w={868} lineClamp={2}>
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
									<Text size="20px" color="white" ml={530} mt={32} fw={400}>
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
							<Image src={WhiteBG} height={327} width={358} pos="absolute" top={64} left={116} />
							<Text color="#E4E8ED" size="md" ml={530} pt={128}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size="lg" ml={530} mt={16}>
								Multizone Heating System{" "}
							</Text>
							<Text color="#E4E8ED" size="md" ml={530} mt={16} w={868} lineClamp={2}>
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
									<Text size="20px" color="white" ml={530} mt={32} fw={400}>
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
							<Image src={WhiteBG} height={327} width={358} pos="absolute" top={64} left={116} />
							<Text color="#E4E8ED" size="md" ml={530} pt={128}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size="lg" ml={530} mt={16}>
								Temperature Controller{" "}
							</Text>
							<Text color="#E4E8ED" size="md" ml={530} mt={16} w={868} lineClamp={2}>
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
									<Text size="20px" color="white" ml={530} mt={32} fw={400}>
										Read more
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
			</Paper>
			<Paper w={1440} h={4450} withBorder bg={"black"}>
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text size={"32px"} mt={91} ml={114} color="#F6F6F6">
							Application
						</Text>
						<Divider size="md" my={23} mr={114} ml={114} pb={40} />
					</Box>
				</Group>
				<Container>
					<Image src={SCR} width={1000} height={422} mx={"auto"} />

					<Text color="#F6F6F6" ta="left" size="lg" pt={64}>
						SCR Power Regulators
					</Text>
					<Text color="#E4E8ED" ta="left" size="md" pt={34} w={1006} fw={400}>
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
					<Image src={PhaseAngel} width={1000} height={171} mx={"auto"} pt={128} />

					<Text size="lg" fw={600} pt={64} pl={217} color="#262728">
						Why use Thyristor Power Controllers?
					</Text>
					<Text size="md" fw={"400"} w={"85%"} pl={217} pt={32}>
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

					<Image src={TPC} width={979} height={409} mx={"auto"} pt={64} />

					<Text size="md" pl={217} pt={64} color="#555459">
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
						<Text size={"32px"} mt={128} ml={114} color="#F6F6F6">
							Related Post
						</Text>
					</Box>
				</Group>

				<Group justify="center" gap="lg">
					<Card h={700} w={391} bg={"black"}>
						<Card.Section>
							<Box pos="relative" w={391} h={450} bg={"black"}>
								<Image
									src={WhiteBG}
									height={270}
									width={391}
									alt="Client"
									pos="absolute"
									top={26}
									w="100%"
									h="100%"
								/>
								<Text fw={400} h={92} w={347} size="lg" pos="absolute" mt={350} color="#F6F6F6">
									Signal Isolation
								</Text>

								<Text
									size="16px"
									fw={400}
									w={325}
									h={46}
									pos="absolute"
									top={414}
									color="#E4E8ED"
									lineClamp={2}
								>
									Libratherm has supplied various types of temperature controllers, thyristor power
									controllers and control panels to the industries manufacturing Files, Diamond
									Tools, Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and
									circular blades etc… The temperature of the electrical or fuel fired heating
									systems, used for annealing, hardening, steam bluing and similar such processes,
									has been in use for precise control up to 1200-C, using our models PRC-300,
									PRC-309, PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from
									thermocouples or infrared non contact sensors.
								</Text>
							</Box>
							<UnstyledButton>
								<Group>
									<Text size="20px" color="white" mt={32} fw={400}>
										Know more
									</Text>
								</Group>
							</UnstyledButton>
						</Card.Section>
					</Card>

					<Card h={700} w={391} bg={"black"}>
						<Card.Section>
							<Box pos="relative" w={391} h={450} bg={"black"}>
								<Image
									src={WhiteBG}
									height={270}
									width={391}
									alt="Client"
									pos="absolute"
									top={26}
									w="100%"
									h="100%"
								/>
								<Text fw={400} h={92} w={347} size="lg" pos="absolute" mt={350} color="#F6F6F6">
									Signal Isolation
								</Text>

								<Text
									size="16px"
									fw={400}
									w={325}
									h={46}
									pos="absolute"
									top={414}
									color="#E4E8ED"
									lineClamp={2}
								>
									Libratherm has supplied various types of temperature controllers, thyristor power
									controllers and control panels to the industries manufacturing Files, Diamond
									Tools, Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and
									circular blades etc… The temperature of the electrical or fuel fired heating
									systems, used for annealing, hardening, steam bluing and similar such processes,
									has been in use for precise control up to 1200-C, using our models PRC-300,
									PRC-309, PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from
									thermocouples or infrared non contact sensors.
								</Text>
							</Box>
							<UnstyledButton>
								<Group>
									<Text size="20px" color="white" mt={32} fw={400}>
										Know more
									</Text>
								</Group>
							</UnstyledButton>
						</Card.Section>
					</Card>

					<Card h={700} w={391} bg={"black"}>
						<Card.Section>
							<Box pos="relative" w={391} h={450} bg={"black"}>
								<Image
									src={WhiteBG}
									height={270}
									width={391}
									alt="Client"
									pos="absolute"
									top={26}
									w="100%"
									h="100%"
								/>
								<Text fw={400} h={92} w={347} size="lg" pos="absolute" mt={350} color="#F6F6F6">
									Signal Isolation
								</Text>

								<Text
									size="16px"
									fw={400}
									w={325}
									h={46}
									pos="absolute"
									top={414}
									color="#E4E8ED"
									lineClamp={2}
								>
									Libratherm has supplied various types of temperature controllers, thyristor power
									controllers and control panels to the industries manufacturing Files, Diamond
									Tools, Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and
									circular blades etc… The temperature of the electrical or fuel fired heating
									systems, used for annealing, hardening, steam bluing and similar such processes,
									has been in use for precise control up to 1200-C, using our models PRC-300,
									PRC-309, PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from
									thermocouples or infrared non contact sensors.
								</Text>
							</Box>
							<UnstyledButton>
								<Group>
									<Text size="20px" color="white" mt={32} fw={400}>
										Know more
									</Text>
								</Group>
							</UnstyledButton>
						</Card.Section>
					</Card>
				</Group>
			</Paper>
		</>
	);
};

export default Application;

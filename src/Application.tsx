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
	Stack,
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
			<Paper w={{ base: 360 }} h={{ base: 2200 }} bg={"black"} mt={30}>
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text fz={{ base: 15 }} mt={{ base: 59 }} ml={{ base: 16 }} c={"#f6f6f6"}>
							Application
						</Text>
						<Divider size="xs" ml={{ base: 16 }} w={{ base: 328 }} mt={{ base: 16 }} />
					</Box>
				</Group>

				<Grid>
					<Grid.Col span={{ base: 12 }}>
						<Image
							src={WhiteBG}
							mt={{ base: 40 }}
							ml={{ base: 16 }}
							h={{ base: 300 }}
							w={{ base: 328 }}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12 }}>
						<Text c={"#f6f6f6"} fz={{ base: 18 }} mt={{ base: 16 }} ml={{ base: 16 }}>
							Glass Manufacture
						</Text>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12 }}
							mt={{ base: 12 }}
							lineClamp={2}
							ml={{ base: 16 }}
							w={{ base: 325 }}
						>
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
								<Text fz={{ base: 15 }} c={"#ffffff"} mt={{ base: 8 }} fw={400} ml={{ base: 16 }}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={{ base: 12 }}>
						<Image
							src={WhiteBG}
							mt={{ base: 40 }}
							ml={{ base: 16 }}
							h={{ base: 300 }}
							w={{ base: 328 }}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12 }}>
						<Text c={"#f6f6f6"} fz={{ base: 18 }} mt={{ base: 16 }} ml={{ base: 16 }}>
							Glass Manufacture
						</Text>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12 }}
							mt={{ base: 12 }}
							lineClamp={2}
							ml={{ base: 16 }}
							w={{ base: 325 }}
						>
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
								<Text fz={{ base: 15 }} c={"#ffffff"} mt={{ base: 8 }} fw={400} ml={{ base: 16 }}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={{ base: 12 }}>
						<Image
							src={WhiteBG}
							mt={{ base: 40 }}
							ml={{ base: 16 }}
							h={{ base: 300 }}
							w={{ base: 328 }}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12 }}>
						<Text c={"#f6f6f6"} fz={{ base: 18 }} mt={{ base: 16 }} ml={{ base: 16 }}>
							Glass Manufacture
						</Text>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12 }}
							mt={{ base: 12 }}
							lineClamp={2}
							ml={{ base: 16 }}
							w={{ base: 325 }}
						>
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
								<Text fz={{ base: 15 }} c={"#ffffff"} mt={{ base: 8 }} fw={400} ml={{ base: 16 }}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={{ base: 12 }}>
						<Image
							src={WhiteBG}
							mt={{ base: 40 }}
							ml={{ base: 16 }}
							h={{ base: 300 }}
							w={{ base: 328 }}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12 }}>
						<Text c={"#f6f6f6"} fz={{ base: 18 }} mt={{ base: 16 }} ml={{ base: 16 }}>
							Glass Manufacture
						</Text>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12 }}
							mt={{ base: 12 }}
							lineClamp={2}
							ml={{ base: 16 }}
							w={{ base: 325 }}
						>
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
								<Text fz={{ base: 15 }} c={"#ffffff"} mt={{ base: 8 }} fw={400} ml={{ base: 16 }}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
			</Paper>
			<Paper w={{ base: 360 }} h={{ base: 2600 }} bg={"black"} mt={30}>
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text fz={{ base: 20 }} mt={60} ml={{ base: 16 }} c={"#f6f6f6"}>
							Application
						</Text>
						<Divider ml={{ base: 16 }} size={"xs"} w={{ base: 328 }} mt={18} />
					</Box>
				</Group>

				<Image src={SCR} w={{ base: 277 }} h={{ base: 117 }} mt={{ base: 41 }} ml={{ base: 42 }} />

				<Text c={"#f6f6f6"} fz={{ base: 20 }} ml={{ base: 16 }} mt={24}>
					SCR Power Regulators
				</Text>
				<Text c={"#e4e8ed"} fz={{ base: 12 }} pt={16} w={{ base: 328 }} ml={{ base: 16 }} fw={400}>
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

				<Paper
					w={{ base: 360 }}
					h={{ base: 1280 }}
					bg={"white"}
					pt={{ base: 30 }}
					mt={{ base: 30 }}
				>
					<Image
						src={PhaseAngel}
						w={{ base: 329 }}
						h={{ base: 57 }}
						ml={{ base: 15 }}
						mt={{ base: 64 }}
					/>

					<Text fz={{ base: 20 }} w={{ base: 294 }} fw={600} mt={32} ml={28} c={"#262728"}>
						Why use Thyristor Power Controllers?
					</Text>
					<Text
						fz={{ base: 12 }}
						fw={400}
						w={{ base: 305 }}
						ml={28}
						mt={{ base: 16 }}
						c={"#555459"}
					>
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

					<Image src={TPC} w={{ base: 332 }} h={155} mt={{ base: 40 }} ml={{ base: 15 }} />

					<Text
						fz={{ base: 12 }}
						ml={{ base: 16 }}
						mt={{ base: 40 }}
						c={"#555459"}
						w={{ base: 328 }}
					>
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

				<Text fz={{ base: 20 }} mt={{ base: 64 }} ml={{ base: 16 }} c={"#f6f6f6"}>
					Related Post
				</Text>

				<Image src={WhiteBG} h={212} ml={32} w={{ base: 296 }} mt={{ base: 40 }} />
				<Text
					fw={400}
					w={{ base: 347 }}
					fz={{ base: 18 }}
					mt={{ base: 48 }}
					ml={{ base: 16 }}
					c={"#f6f6f6"}
				>
					SCR Power Regulators
				</Text>

				<Text
					fz={{ base: 12 }}
					fw={400}
					w={{ base: 325 }}
					ml={{ base: 16 }}
					c={"#e4e8ed"}
					lineClamp={3}
					mt={{ base: 12 }}
				>
					Libratherm has supplied various types of temperature controllers, thyristor power
					controllers and control panels to the industries manufacturing Files, Diamond Tools,
					Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular blades
					etc… The temperature of the electrical or fuel fired heating systems, used for annealing,
					hardening, steam bluing and similar such processes, has been in use for precise control up
					to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723, DLC-301, POW-3/S and
					POW-3/D with the sensor input from thermocouples or infrared non contact sensors.
				</Text>
				<UnstyledButton>
					<Text fz={{ base: 15 }} c={"#FFFFFF"} mt={32} fw={400} ml={{ base: 16 }}>
						Read more
					</Text>
				</UnstyledButton>

				<Group wrap="nowrap" gap={0} visibleFrom="md">
					<Box w="100%">
						<Text fz={32} mt={128} ml={114} c={"#f6f6f6"}>
							Related Post
						</Text>
					</Box>
				</Group>

				<Group justify="center" visibleFrom="md">
					<Box pos="relative" w={{ base: 391 }} h={{ base: 650 }} bg={"black"}>
						<Image src={WhiteBG} h={270} w={{ base: 391 }} pos="absolute" top={26} />
						<Text fw={400} h={92} w={{ base: 347 }} fz={32} pos="absolute" mt={350} c={"#f6f6f6"}>
							Industries
						</Text>

						<Text
							size="16px"
							fw={400}
							w={{ base: 391 }}
							pos="absolute"
							top={414}
							c={"#e4e8ed"}
							lineClamp={3}
						>
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

					<Box pos="relative" w={{ base: 391 }} h={{ base: 650 }} bg={"black"}>
						<Image src={WhiteBG} h={270} w={{ base: 391 }} pos="absolute" top={26} />
						<Text fw={400} h={92} w={{ base: 347 }} fz={32} pos="absolute" mt={350} c={"#f6f6f6"}>
							Services
						</Text>

						<Text
							size="16px"
							fw={400}
							w={{ base: 391 }}
							pos="absolute"
							top={414}
							c={"#e4e8ed"}
							lineClamp={3}
						>
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

					<Box pos="relative" w={{ base: 391 }} h={{ base: 650 }} bg={"black"}>
						<Image src={WhiteBG} h={270} w={{ base: 391 }} pos="absolute" top={26} />
						<Text fw={400} h={92} w={{ base: 347 }} fz={32} pos="absolute" mt={350} c={"#f6f6f6"}>
							Applications
						</Text>

						<Text
							size="16px"
							fw={400}
							w={{ base: 391 }}
							pos="absolute"
							top={414}
							c={"#e4e8ed"}
							lineClamp={3}
						>
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
			{/* <Paper w={360} h={2347} bg={"black"} hiddenFrom="xs">
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text fz={{base:20}} mt={60} ml={{base:16}} c={"#f6f6f6"}>
							Application
						</Text>
						<Divider ml={{base:16}} size={"xs"} w={{base:328}} mt={18} />
					</Box>
				</Group>
				<Grid>
					<Grid.Col span={{base:12}}>
						<Image src={WhiteBG} mt={{base:40}} ml={{base:16}} h={{base:300}} w={{base:328}} />
					</Grid.Col>
					<Grid.Col span={{base:12}}>
						<Text c={"#f6f6f6"} fz={{base:18}} mt={{base:16}} ml={{base:16}}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={{base:12}} mt={{base:12}} lineClamp={2} ml={{base:16}} w={{base:325}}>
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
								<Text fz={{base:15}} c={"#ffffff"} mt={{base:8}} fw={400} ml={{base:16}}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={{base:12}}>
						<Image src={WhiteBG} mt={{base:40}} ml={{base:16}} h={{base:300}} w={{base:328}} />
					</Grid.Col>
					<Grid.Col span={{base:12}}>
						<Text c={"#f6f6f6"} fz={{base:18}} mt={{base:16}} ml={{base:16}}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={{base:12}} mt={{base:12}} lineClamp={2} ml={{base:16}} w={{base:325}}>
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
								<Text fz={{base:15}} c={"#ffffff"} mt={{base:8}} fw={400} ml={{base:16}}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={{base:12}}>
						<Image src={WhiteBG} mt={{base:40}} ml={{base:16}} h={{base:300}} w={{base:328}} />
					</Grid.Col>
					<Grid.Col span={{base:12}}>
						<Text c={"#f6f6f6"} fz={{base:18}} mt={{base:16}} ml={{base:16}}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={{base:12}} mt={{base:12}} lineClamp={2} ml={{base:16}} w={{base:325}}>
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
								<Text fz={{base:15}} c={"#ffffff"} mt={{base:8}} fw={400} ml={{base:16}}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={{base:12}}>
						<Image src={WhiteBG} mt={{base:40}} ml={{base:16}} h={{base:300}} w={{base:328}} />
					</Grid.Col>
					<Grid.Col span={{base:12}}>
						<Text c={"#f6f6f6"} fz={{base:18}} mt={{base:16}} ml={{base:16}}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={{base:12}} mt={{base:12}} lineClamp={2} ml={{base:16}} w={{base:325}}>
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
								<Text fz={{base:15}} c={"#ffffff"} mt={{base:8}} fw={400} ml={{base:16}}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
			</Paper>
			<Paper w={360} h={2850} bg={"black"} hiddenFrom="xs">
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text fz={{base:20}} mt={60} ml={{base:16}} c={"#f6f6f6"}>
							Application
						</Text>
						<Divider ml={{base:16}} size={"xs"} w={{base:328}} mt={18} />
					</Box>
				</Group>

				<Image src={SCR} w={{base:277}} h={{base:117}} mt={{base:41}} ml={{base:42}} />

				<Text c={"#f6f6f6"} fz={{base:20}} ml={{base:16}} mt={24}>
					SCR Power Regulators
				</Text>
				<Text c={"#e4e8ed"} fz={{base:12}} pt={16} w={{base:328}} ml={{base:16}} fw={400}>
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
					<Image src={PhaseAngel} w={{base:329}} h={{base:57}} ml={{base:15}} mt={{base:64}} />

					<Text fz={{base:20}} w={{base:294}} fw={600} mt={32} ml={28} c={"#262728"}>
						Why use Thyristor Power Controllers?
					</Text>
					<Text fz={{base:12}} fw={400} w={{base:305}} ml={28} mt={{base:16}} c={"#555459"}>
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

					<Image src={TPC} w={{base:332}} h={155} mt={{base:40}} ml={{base:15}} />

					<Text fz={{base:12}} ml={{base:16}} mt={{base:40}} c={"#555459"} w={{base:328}}>
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

				<Text fz={{base:20}} mt={{base:64}} ml={{base:16}} c={"#f6f6f6"}>
					Related Post
				</Text>

				<Image src={WhiteBG} h={212} ml={32} w={{base:296}} mt={{base:40}} />
				<Text fw={400} w={{base:347}} fz={{base:18}} mt={{base:48}} ml={{base:16}} c={"#f6f6f6"}>
					SCR Power Regulators
				</Text>

				<Text fz={{base:12}} fw={400} w={{base:325}} ml={{base:16}} c={"#e4e8ed"} lineClamp={3} mt={{base:12}}>
					Libratherm has supplied various types of temperature controllers, thyristor power
					controllers and control panels to the industries manufacturing Files, Diamond Tools,
					Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular blades
					etc… The temperature of the electrical or fuel fired heating systems, used for annealing,
					hardening, steam bluing and similar such processes, has been in use for precise control up
					to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723, DLC-301, POW-3/S and
					POW-3/D with the sensor input from thermocouples or infrared non contact sensors.
				</Text>
				<UnstyledButton>
					<Text fz={{base:15}} c={"#FFFFFF"} mt={32} fw={400} ml={{base:16}}>
						Read more
					</Text>
				</UnstyledButton>
			</Paper> */}

			{/**Tablet View */}
			{/* <Paper w={768} h={2340} bg={"black"} visibleFrom="xs" hiddenFrom="md">
				<Text fz={28} ml={90} pt={91} c={"#f6f6f6"}>
					Industry
				</Text>
				<Divider size="md" my={23} mx={90} pb={40} />

				<Grid mx={90}>
					<Grid.Col span={4}>
						<Image src={WhiteBG} h={194} w={206} />
					</Grid.Col>
					<Grid.Col span={8}>
						<Text c={"#e4e8ed"} fz={{base:12}} mt={10} ml={30}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={{base:20}} mt={{base:8}} ml={30}>
							SCR Power Regulators
						</Text>
						<Text c={"#e4e8ed"} fz={{base:12}} lineClamp={2} w={388} mt={14} ml={30}>
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
								<Text fz={14} c={"#ffffff"} mt={32} ml={30} fw={400}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={4} mt={60}>
						<Image src={WhiteBG} h={194} w={206} />
					</Grid.Col>
					<Grid.Col span={8} mt={60}>
						<Text c={"#e4e8ed"} fz={{base:12}} mt={10} ml={30}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={{base:20}} mt={{base:8}} ml={30}>
							SCR Triggering Cards for OEM{" "}
						</Text>
						<Text c={"#e4e8ed"} fz={{base:12}} lineClamp={2} w={388} mt={14} ml={30}>
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
								<Text fz={14} c={"#ffffff"} mt={32} ml={30} fw={400}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={4} mt={60}>
						<Image src={WhiteBG} h={194} w={206} />
					</Grid.Col>
					<Grid.Col span={8} mt={60}>
						<Text c={"#e4e8ed"} fz={{base:12}} mt={10} ml={30}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={{base:20}} mt={{base:8}} ml={30}>
							Thyristor Power Switches
						</Text>
						<Text c={"#e4e8ed"} fz={{base:12}} lineClamp={2} w={388} mt={14} ml={30}>
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
								<Text fz={14} c={"#ffffff"} mt={32} ml={30} fw={400}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={4} mt={60}>
						<Image src={WhiteBG} h={194} w={206} />
					</Grid.Col>
					<Grid.Col span={8} mt={60}>
						<Text c={"#e4e8ed"} fz={{base:12}} mt={10} ml={30}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={{base:20}} mt={{base:8}} ml={30}>
							Phase Angle Control vs Zero Crossover
						</Text>
						<Text c={"#e4e8ed"} fz={{base:12}} lineClamp={2} w={388} mt={14} ml={30}>
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
								<Text fz={14} c={"#ffffff"} mt={32} ml={30} fw={400}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={4} mt={60}>
						<Image src={WhiteBG} h={194} w={206} />
					</Grid.Col>
					<Grid.Col span={8} mt={60}>
						<Text c={"#e4e8ed"} fz={{base:12}} mt={10} ml={30}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={{base:20}} mt={{base:8}} ml={30}>
							Multizone Heating System
						</Text>
						<Text c={"#e4e8ed"} fz={{base:12}} lineClamp={2} w={388} mt={14} ml={30}>
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
								<Text fz={14} c={"#ffffff"} mt={32} ml={30} fw={400}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={4} mt={60}>
						<Image src={WhiteBG} h={194} w={206} />
					</Grid.Col>
					<Grid.Col span={8} mt={60}>
						<Text c={"#e4e8ed"} fz={{base:12}} mt={10} ml={30}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={{base:20}} mt={{base:8}} ml={30}>
							Signal Isolation
						</Text>
						<Text c={"#e4e8ed"} fz={{base:12}} lineClamp={2} w={388} mt={14} ml={30}>
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
								<Text fz={14} c={"#ffffff"} mt={32} ml={30} fw={400}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={4} mt={60}>
						<Image src={WhiteBG} h={194} w={206} />
					</Grid.Col>
					<Grid.Col span={8} mt={60}>
						<Text c={"#e4e8ed"} fz={{base:12}} mt={10} ml={30}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={{base:20}} mt={{base:8}} ml={30}>
							Temperature Controller
						</Text>
						<Text c={"#e4e8ed"} fz={{base:12}} lineClamp={2} w={388} mt={14} ml={30}>
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
								<Text fz={14} c={"#ffffff"} mt={32} ml={30} fw={400}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
			</Paper>
			<Paper w={768} h={2850} bg={"black"} hiddenFrom="md" visibleFrom="xs">
				<Text fz={28} ml={90} pt={91} c={"#f6f6f6"}>
					Industry
				</Text>
				<Divider size="md" my={23} mx={90} pb={40} />
				<Image src={SCR} w={588} h={355} mt={20} ml={90} />

				<Text ml={90} c={"#f6f6f6"} fz={{base:20}} mt={{base:64}}>
					SCR Power Regulators
				</Text>
				<Text ml={90} c={"#e4e8ed"} fz={{base:12}} mt={24} w={588} fw={400}>
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

				<Paper w={768} h={1280} bg={"white"}>
					<Image src={PhaseAngel} w={680} h={168} ml={50} mt={30} pt={50} />

					<Text ml={90} fz={{base:20}} fw={600} pt={82} c={"#262728"}>
						Why use Thyristor Power Controllers?
					</Text>
					<Text ml={90} fz={{base:12}} mt={24} w={588} fw={400} c={"#555459"}>
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

					<Image src={TPC} w={600} h={268} mt={{base:40}} ml={90} />

					<Text ml={90} fz={{base:12}} mt={24} w={588} fw={400} c={"#555459"}>
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

				<Text fz={{base:20}} mt={{base:64}} ml={90} c={"#f6f6f6"}>
					Related Post
				</Text>

				<Grid ml={90} mt={30}>
					<Grid.Col span={6}>
						<Stack>
							<Image src={WhiteBG} h={200} w={280} mt={44} />

							<Text c={"#e4e8ed"} fz={{base:20}}>
								Signal Isolation
							</Text>
							<Text w={280} c={"#ffffff"} fz={14} lineClamp={2}>
								Libratherm has supplied various types of temp - erature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Text fz={{base:18}} c={"#f6f6f6"}>
									Read More
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>

					<Grid.Col span={6}>
						<Stack>
							<Image src={WhiteBG} h={200} w={280} mt={44} />

							<Text c={"#e4e8ed"} fz={{base:20}}>
								Signal Isolation
							</Text>
							<Text w={280} c={"#ffffff"} fz={14} lineClamp={2}>
								Libratherm has supplied various types of temp - erature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Text fz={{base:18}} c={"#f6f6f6"}>
									Read More
								</Text>
							</UnstyledButton>
						</Stack>
					</Grid.Col>
				</Grid>
			</Paper> */}
		</>
	);
};

export default Application;

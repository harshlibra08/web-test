import {
	Paper,
	Group,
	Box,
	Divider,
	Container,
	List,
	Grid,
	Button,
	Text,
	Image,
	Tabs,
} from "@mantine/core";
import React from "react";
import PWHT from "./Assets/image 426.png";
import PWHT2 from "./Assets/pwht2.png";
import PWHT3 from "./Assets/pwht3.png";
import Rect3715 from "./Assets/Rectangle 3715.png";
import Rect3716 from "./Assets/Rectangle 3716.png";
import SixZone from "./Assets/sixzone.png";
import Img440 from "./Assets/image 440.png";
type Props = {};

const Services = (props: Props) => {
	return (
		<>
			<Paper w={1440} h={5408} bg={"black"} visibleFrom="md">
				<Group wrap="nowrap">
					<Box w="100%">
						<Text fz={32} mt={91} ml={114} c={"#f6f6f6"}>
							Services
						</Text>
						<Divider size="md" my={23} mr={114} ml={114} />
					</Box>
				</Group>

				<Text c={"#f6f6f6"} ta="center" fz={32} pt={64}>
					Post Weld Heat Treatment (PWHT)
				</Text>

				<Text c={"#e4e8ed"} ta="left" fz={16} pt={34} w={1000} fw={400} ml={217}>
					Welding is the process of joining metals or thermoplastics by using high heat or pressure
					and fusing the parent material with weld metal. Welding has many applications in
					industries like automotive, shipping, construction, mechanical, and many more. The major
					drawback of welding is the residual stress formed by the rapid cooling of the weld
					material. The sudden shrinking of the joint material weakens the equipment, thus impacting
					the metal's quality and structure. For dense materials, these stresses can even exceed the
					specified design stress. <br />
					Post Weld Heat Treatment (PWHT)/Stress Relief helps retain the material strength of the
					part subjected to welding by reducing and redistributing the residual stress. PWHT not
					only reduces residual stress but also controls the material's hardness and enhances
					mechanical strength. This treatment can be performed after any welding process, but it has
					a specific meaning for few industries. Current design codes such as ASME and BSI Pressure
					vessels and Piping codes specify that PWHT is required to ensure safe and desired design
					with optimum mechanical and metallurgic properties.
				</Text>

				<Image src={PWHT} w={670} h={372} ml={385} mt={64} />
				<Text c={"#f6f6f6"} ta="left" fz={24} mt={64} ml={217}>
					What happens in PWHT?
				</Text>

				<Text c={"#e4e8ed"} ta="left" fz={16} ml={217} mt={34} w={1000} fw={400} mb={128}>
					Post Weld Heat Treatment (PWHT) reheats the welded material using a controlled ramp-soak
					profile with a temperature below its initial transformation temperature. The temperature
					ranges from 595˚C to 775˚C depending upon the properties of the metal/material. The
					heating rate is determined and controlled by the type of material thickness. The holding
					temperature is the one that is high enough to relieve stress and reduce hardness, but it
					is lower than the initial transformation temperature. Uneven or quick heating or cooling
					can form cracks in the component. Heating and cooling rate, holding temperature, and soak
					duration must be controlled and monitored precisely to avoid any detrimental effects such
					as reheat cracking, distortion, decrease in the toughness, and over softening to obtain
					the full benefit of the process. <br /> <br />
					Libratherm offers Single-Zone and Multi-Zone PID Ramp Soak controllers, which precisely
					controls the PWHT process. They can directly accept grounded/ungrounded thermocouples and
					provide analogue/SSR output with PID control action. The user can program multiple steps
					of ramping, soaking, and cooling to achieve a precise heating rate. Both controllers can
					operate independently or in a cascade mode (Master-Slave). Optionally MODBUS over RS-485
					interface is also available for interfacing with SCADA, PLC or data logging systems.
				</Text>

				<Paper h={1773} w={1441} bg={"white"}>
					<Image src={PWHT2} w={1006} h={404} ml={218} mt={128} />
					<Image src={PWHT3} w={1006} h={404} ml={218} mt={103} />
					<Container>
						<Text ta="left" fz={24} fw={600} pt={128} style={{ color: "#262728" }}>
							Advantages of PWHT
						</Text>
						<Text pt={32}>
							<List>
								<List.Item fz={16} c={"#555459"}>
									PWHT uses a technique that reduces or redistributes the Residual Stress formed by
									the welding Process by involving 4-step processes like Pre-Heating, Heating,
									Soaking & Cooling the Welded Surface to controlled temperatures for a specified
									amount of time. This enhances the properties of the welded surface.
								</List.Item>
								<List.Item fz={16} c={"#555459"}>
									Helps to improve the Metallurgical Structure.
								</List.Item>
								<List.Item fz={16} c={"#555459"}>
									Helps to improve the Ductility of the Material.
								</List.Item>
								<List.Item fz={16} c={"#555459"}>
									Reduces the risk of Brittle Fracture as the Ductility increases.
								</List.Item>
								<List.Item fz={16} c={"#555459"}>
									Relaxed Thermal Stress due to the redistribution of Residual Stresses.
								</List.Item>
							</List>
						</Text>
					</Container>
					<Container>
						<Text ta="left" fz={24} fw={600} mt={64} style={{ color: "#262728" }}>
							Safety and Precautions
						</Text>
						<Text pt={32}>
							<List>
								<List.Item fz={16} c={"#555459"}>
									PWHT must be performed by certified experts with experience in this field.
								</List.Item>
								<List.Item fz={16} c={"#555459"}>
									The portion exposed to PWHT must be covered properly to protect it from rain or
									wind.
								</List.Item>
								<List.Item fz={16} c={"#555459"}>
									A hardness test must be performed to check if Post weld heat treatment is
									successfully performed.
								</List.Item>
								<List.Item fz={16} c={"#555459"}>
									Some metals and alloys can experience cracks during PWHT. Therefore, the alloy
									system must be taken into account.
								</List.Item>
								<List.Item fz={16} c={"#555459"}>
									Thermocouples are used for monitoring PWHT to assure heating rates, cooling rates,
									and hold temperature is within standard specifications. Along with thermocouples
									computer software is used to provide documentation about PWHT.
								</List.Item>
							</List>
						</Text>
					</Container>
				</Paper>

				<Grid>
					<Grid.Col span={6}>
						<Image src={Rect3715} h={871} w={720} pos="absolute" pl={0} left={0} />
						<Image src={SixZone} w={444} h={407} pos={"absolute"} left={134} mt={175} />
						<Button variant="default" color="#FFF" mt={646} left={288} radius={0} tt={"uppercase"}>
							visit prc 6000
						</Button>
					</Grid.Col>
					<Grid.Col span={6}>
						<Text
							fz={24}
							w={514}
							h={44}
							fw={600}
							mt={128}
							ml={50}
							style={{ lineHeight: "51.2px", color: "#F6F6F6" }}
						>
							PWHT Temperature Controller - PRC 6000
						</Text>
						<Text h={114} w={596} c={"#e4e8ed"} fz={14} fw={400} ml={50} mt={24}>
							Libratherm offers Ramp/Soak Programmable PID Temperature Controller – PRC-489 which is
							designed to improve reliability, accuracy, and control for all temperature control
							applications. It features Ramp and Soak functions. The single pattern of a total of 16
							(ramp/soak) steps can be programmed and stored in the memory. It can also be used as
							single set point control when the ramp/soak profile control is not desired. The
							controllers are calibrated for a K-type thermocouple.
						</Text>

						<Text fz={24} w={514} h={44} fw={600} mt={64} ml={50} c={"#f6f6f6"}>
							Features
						</Text>

						<Text h={308} w={552} c={"#e4e8ed"} fw={400} ml={50} mt={32}>
							<List>
								<List.Item fz={16} c={"#e4e8ed"}>
									Accepts standard K type thermocouple
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									Control output of Relay / TRAIC / DC pulse / (4-20)mA/ (0-5)Volt.
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									Servo start from the current process temperature.
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									1 to 16 programmable ramp/soak steps with rate programming facility.
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									Master / Slave concept with 1 master and max. 30 slaves.
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									Each controller can be configured as master or slave with 1 master and many
									slaves.
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									Can be used as single set point control with online set point change facility.
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									Auto Tracking feature to ensure same rate of heating/cooling even after power
									failure / resumption.
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									Deviation hold above and below the set point for assured heating ramp and cooling
									ramp.
								</List.Item>
							</List>
						</Text>
					</Grid.Col>

					<Grid.Col span={6}>
						<Text fz={24} w={514} h={44} fw={600} mt={228} mb={32} ml={114} c={"#f6f6f6"}>
							Ramp/Soak Programmable PID Temperature Controller – PRC-489
						</Text>
						<Text h={110} w={596} c={"#e4e8ed"} size="md" fw={400} ml={114} mt={98}>
							Libratherm offers Ramp/Soak Programmable PID Temperature Controller – PRC-489 which is
							designed to improve reliability, accuracy, and control for all temperature control
							applications. It features Ramp and Soak functions. The single pattern of a total of 16
							(ramp/soak) steps can be programmed and stored in the memory. It can also be used as
							single set point control when the ramp/soak profile control is not desired. The
							controllers are calibrated for a K-type thermocouple.
						</Text>

						<Text
							fz={24}
							w={514}
							h={44}
							fw={600}
							mt={64}
							ml={114}
							style={{ lineHeight: "51.2px", color: "#F6F6F6" }}
						>
							Features
						</Text>

						<Text w={552} c={"#e4e8ed"} size="md" fw={400} ml={114} mt={22}>
							<List>
								<List.Item fz={16} c={"#e4e8ed"}>
									Accepts standard K type thermocouple
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									Control output of Relay / TRAIC / DC pulse / (4-20)mA/ (0-5)Volt.
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									Servo start from the current process temperature.
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									1 to 16 programmable ramp/soak steps with rate programming facility.
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									Master / Slave concept with 1 master and max. 30 slaves.
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									Each controller can be configured as master or slave with 1 master and many
									slaves.
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									Can be used as single set point control with online set point change facility.
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									Auto Tracking feature to ensure same rate of heating/cooling even after power
									failure / resumption.
								</List.Item>
								<List.Item fz={16} c={"#e4e8ed"}>
									Deviation hold above and below the set point for assured heating ramp and cooling
									ramp.
								</List.Item>
							</List>
						</Text>
					</Grid.Col>
					<Grid.Col span={6}>
						<Image src={Rect3716} w={720.5} h={1157} pos={"absolute"} left={719} mt={95} />

						<Image src={Img440} pos={"absolute"} w={449} h={449} ml={136} mt={179} />

						<Button
							variant="default"
							color="#FFF"
							mt={664}
							ml={293}
							radius={0}
							pos={"absolute"}
							tt={"uppercase"}
						>
							visit prc 6000
						</Button>
					</Grid.Col>
				</Grid>
			</Paper>
			{/**Mobile View */}
			<Paper w={360} h={5000} bg={"black"} hiddenFrom="xs">
				<Group wrap="nowrap">
					<Box w="100%">
						<Text fz={20} mt={91} ml={16} c={"#f6f6f6"}>
							Services
						</Text>
						<Divider size="xs" my={16} ml={16} w={344} />
					</Box>
				</Group>
				<Tabs color="rgba(255, 255, 255, 1)" defaultValue="pwht" ml={16}>
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

				<Text c={"#f6f6f6"} ml={100} w={160} ta={"center"} fz={14} pt={40}>
					Post Weld Heat Treatment (PWHT)
				</Text>

				<Text ml={16} c={"#e4e8ed"} ta="left" fz={12} mt={16} w={328} fw={400}>
					Welding is the process of joining metals or thermoplastics by using high heat or pressure
					and fusing the parent material with weld metal. Welding has many applications in
					industries like automotive, shipping, construction, mechanical, and many more. The major
					drawback of welding is the residual stress formed by the rapid cooling of the weld
					material. The sudden shrinking of the joint material weakens the equipment, thus impacting
					the metal's quality and structure. For dense materials, these stresses can even exceed the
					specified design stress. <br />
					Post Weld Heat Treatment (PWHT)/Stress Relief helps retain the material strength of the
					part subjected to welding by reducing and redistributing the residual stress. PWHT not
					only reduces residual stress but also controls the material's hardness and enhances
					mechanical strength. This treatment can be performed after any welding process, but it has
					a specific meaning for few industries. Current design codes such as ASME and BSI Pressure
					vessels and Piping codes specify that PWHT is required to ensure safe and desired design
					with optimum mechanical and metallurgic properties.
				</Text>

				<Image src={PWHT} ml={16} w={320} h={181} mt={24} />
				<Text ml={16} c={"#f6f6f6"} fz={14} mt={40}>
					What happens in PWHT?
				</Text>

				<Text ml={16} c={"#e4e8ed"} fz={12} mt={24} w={327} fw={400}>
					Post Weld Heat Treatment (PWHT) reheats the welded material using a controlled ramp-soak
					profile with a temperature below its initial transformation temperature. The temperature
					ranges from 595˚C to 775˚C depending upon the properties of the metal/material. The
					heating rate is determined and controlled by the type of material thickness. The holding
					temperature is the one that is high enough to relieve stress and reduce hardness, but it
					is lower than the initial transformation temperature. Uneven or quick heating or cooling
					can form cracks in the component. Heating and cooling rate, holding temperature, and soak
					duration must be controlled and monitored precisely to avoid any detrimental effects such
					as reheat cracking, distortion, decrease in the toughness, and over softening to obtain
					the full benefit of the process. <br /> <br />
					Libratherm offers Single-Zone and Multi-Zone PID Ramp Soak controllers, which precisely
					controls the PWHT process. They can directly accept grounded/ungrounded thermocouples and
					provide analogue/SSR output with PID control action. The user can program multiple steps
					of ramping, soaking, and cooling to achieve a precise heating rate. Both controllers can
					operate independently or in a cascade mode (Master-Slave). Optionally MODBUS over RS-485
					interface is also available for interfacing with SCADA, PLC or data logging systems.
				</Text>

				<Paper h={1073} w={360} bg={"white"} radius={0} left={0}>
					<Image src={PWHT2} w={328} h={194} mt={72} />
					<Image src={PWHT3} w={360} h={162} ml={0} mt={48} />
					<Container>
						<Text ml={16} c={"#262728"} fz={14} mt={40} fw={600}>
							Advantages of PWHT
						</Text>
						<Text pt={16} fz={12}>
							<List>
								<List.Item fz={12} c={"#555459"}>
									PWHT uses a technique that reduces or redistributes the Residual Stress formed by
									the welding Process by involving 4-step processes like Pre-Heating, Heating,
									Soaking & Cooling the Welded Surface to controlled temperatures for a specified
									amount of time. This enhances the properties of the welded surface.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									Helps to improve the Metallurgical Structure.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									Helps to improve the Ductility of the Material.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									Reduces the risk of Brittle Fracture as the Ductility increases.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									Relaxed Thermal Stress due to the redistribution of Residual Stresses.
								</List.Item>
							</List>
						</Text>
					</Container>
					<Container>
						<Text ml={16} c={"#262728"} fz={14} mt={40} fw={600}>
							Safety and Precautions
						</Text>
						<Text pt={16} fz={12}>
							<List>
								<List.Item fz={12} c={"#555459"}>
									PWHT must be performed by certified experts with experience in this field.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									The portion exposed to PWHT must be covered properly to protect it from rain or
									wind.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									A hardness test must be performed to check if Post weld heat treatment is
									successfully performed.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									Some metals and alloys can experience cracks during PWHT. Therefore, the alloy
									system must be taken into account.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									Thermocouples are used for monitoring PWHT to assure heating rates, cooling rates,
									and hold temperature is within standard specifications. Along with thermocouples
									computer software is used to provide documentation about PWHT.
								</List.Item>
							</List>
						</Text>
					</Container>
				</Paper>

				<Grid mt={33}>
					<Grid.Col span={12}>
						<Image src={Rect3715} h={360} w={360} pos="absolute" pl={0} left={0} />
						<Image src={SixZone} w={308} h={283} pos={"absolute"} ml={26} mt={15} />
						<Button
							variant="default"
							color="#FFF"
							mt={298}
							ml={112}
							radius={0}
							pos={"absolute"}
							tt={"uppercase"}
						>
							visit prc 6000
						</Button>
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={14} fw={600} mt={400} ml={17} c={"#f6f6f6"}>
							PWHT Temperature Controller - PRC 6000
						</Text>
						<Text w={328} c={"#e4e8ed"} fz={12} fw={400} ml={16} mt={24}>
							Libratherm offers Ramp/Soak Programmable PID Temperature Controller – PRC-489 which is
							designed to improve reliability, accuracy, and control for all temperature control
							applications. It features Ramp and Soak functions. The single pattern of a total of 16
							(ramp/soak) steps can be programmed and stored in the memory. It can also be used as
							single set point control when the ramp/soak profile control is not desired. The
							controllers are calibrated for a K-type thermocouple.
						</Text>

						<Text fz={14} fw={600} mt={48} ml={17} c={"#f6f6f6"}>
							Features
						</Text>

						<Text c={"#e4e8ed"} fz={12} w={320} fw={400} mt={24}>
							<List>
								<List.Item>Accepts standard K type thermocouple</List.Item>
								<List.Item>
									Control output of Relay / TRAIC / DC pulse / (4-20)mA/ (0-5)Volt.
								</List.Item>
								<List.Item>Servo start from the current process temperature.</List.Item>
								<List.Item>
									1 to 16 programmable ramp/soak steps with rate programming facility.
								</List.Item>
								<List.Item>Master / Slave concept with 1 master and max. 30 slaves.</List.Item>
								<List.Item>
									Each controller can be configured as master or slave with 1 master and many
									slaves.
								</List.Item>
								<List.Item>
									Can be used as single set point control with online set point change facility.
								</List.Item>
								<List.Item>
									Auto Tracking feature to ensure same rate of heating/cooling even after power
									failure / resumption.
								</List.Item>
								<List.Item>
									Deviation hold above and below the set point for assured heating ramp and cooling
									ramp.
								</List.Item>
							</List>
						</Text>
					</Grid.Col>
					<Grid.Col span={12}>
						<Image src={Rect3716} w={358} h={354} pos={"absolute"} left={0} />
						<Image src={Img440} pos={"absolute"} w={281} h={229} ml={39} mt={35} />

						<Button
							variant="default"
							color="#FFF"
							mt={292}
							ml={112}
							radius={0}
							pos={"absolute"}
							tt={"uppercase"}
						>
							visit prc 6000
						</Button>
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={14} fw={600} w={327} mt={394} ml={16} c={"#f6f6f6"}>
							Ramp/Soak Programmable PID Temperature Controller – PRC-489
						</Text>
						<Text w={328} c={"#e4e8ed"} fz={12} fw={400} ml={16} mt={24}>
							Libratherm offers Ramp/Soak Programmable PID Temperature Controller – PRC-489 which is
							designed to improve reliability, accuracy, and control for all temperature control
							applications. It features Ramp and Soak functions. The single pattern of a total of 16
							(ramp/soak) steps can be programmed and stored in the memory. It can also be used as
							single set point control when the ramp/soak profile control is not desired. The
							controllers are calibrated for a K-type thermocouple.
						</Text>

						<Text fz={14} w={514} h={44} fw={600} mt={48} ml={16} c={"#f6f6f6"}>
							Features
						</Text>

						<Text w={320} c={"#e4e8ed"} fz={12} fw={400} mt={14}>
							<List>
								<List.Item>Accepts standard K type thermocouple</List.Item>
								<List.Item>
									Control output of Relay / TRAIC / DC pulse / (4-20)mA/ (0-5)Volt.
								</List.Item>
								<List.Item>Servo start from the current process temperature.</List.Item>
								<List.Item>
									1 to 16 programmable ramp/soak steps with rate programming facility.
								</List.Item>
								<List.Item>Master / Slave concept with 1 master and max. 30 slaves.</List.Item>
								<List.Item>
									Each controller can be configured as master or slave with 1 master and many
									slaves.
								</List.Item>
								<List.Item>
									Can be used as single set point control with online set point change facility.
								</List.Item>
								<List.Item>
									Auto Tracking feature to ensure same rate of heating/cooling even after power
									failure / resumption.
								</List.Item>
								<List.Item>
									Deviation hold above and below the set point for assured heating ramp and cooling
									ramp.
								</List.Item>
							</List>
						</Text>
					</Grid.Col>
				</Grid>
			</Paper>
			{/**Tablet View */}
			<Paper w={768} h={5600} bg={"black"} hiddenFrom="md" visibleFrom="xs">
				<Text fz={32} pt={91} ml={90} c={"#f6f6f6"}>
					Services
				</Text>
				<Divider size="md" my={26} w={768} mx={90} />
				<Tabs color="rgba(255, 255, 255, 1)" defaultValue="pwht" ml={90} maw={768}>
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
					Post Weld Heat Treatment (PWHT)
				</Text>

				<Text ml={90} c={"#e4e8ed"} fz={12} mt={18} w={588} fw={400}>
					Welding is the process of joining metals or thermoplastics by using high heat or pressure
					and fusing the parent material with weld metal. Welding has many applications in
					industries like automotive, shipping, construction, mechanical, and many more. The major
					drawback of welding is the residual stress formed by the rapid cooling of the weld
					material. The sudden shrinking of the joint material weakens the equipment, thus impacting
					the metal's quality and structure. For dense materials, these stresses can even exceed the
					specified design stress. <br />
					Post Weld Heat Treatment (PWHT)/Stress Relief helps retain the material strength of the
					part subjected to welding by reducing and redistributing the residual stress. PWHT not
					only reduces residual stress but also controls the material's hardness and enhances
					mechanical strength. This treatment can be performed after any welding process, but it has
					a specific meaning for few industries. Current design codes such as ASME and BSI Pressure
					vessels and Piping codes specify that PWHT is required to ensure safe and desired design
					with optimum mechanical and metallurgic properties.
				</Text>

				<Image src={PWHT} ml={90} w={588} h={355} mt={24} />
				<Text ml={90} c={"#f6f6f6"} fz={20} mt={64}>
					What happens in PWHT?
				</Text>

				<Text ml={90} c={"#e4e8ed"} fz={12} mt={24} w={588} fw={400}>
					Post Weld Heat Treatment (PWHT) reheats the welded material using a controlled ramp-soak
					profile with a temperature below its initial transformation temperature. The temperature
					ranges from 595˚C to 775˚C depending upon the properties of the metal/material. The
					heating rate is determined and controlled by the type of material thickness. The holding
					temperature is the one that is high enough to relieve stress and reduce hardness, but it
					is lower than the initial transformation temperature. Uneven or quick heating or cooling
					can form cracks in the component. Heating and cooling rate, holding temperature, and soak
					duration must be controlled and monitored precisely to avoid any detrimental effects such
					as reheat cracking, distortion, decrease in the toughness, and over softening to obtain
					the full benefit of the process. <br /> <br />
					Libratherm offers Single-Zone and Multi-Zone PID Ramp Soak controllers, which precisely
					controls the PWHT process. They can directly accept grounded/ungrounded thermocouples and
					provide analogue/SSR output with PID control action. The user can program multiple steps
					of ramping, soaking, and cooling to achieve a precise heating rate. Both controllers can
					operate independently or in a cascade mode (Master-Slave). Optionally MODBUS over RS-485
					interface is also available for interfacing with SCADA, PLC or data logging systems.
				</Text>

				<Paper h={1373} w={768} bg={"white"} radius={0} left={0}>
					<Image src={PWHT2} w={755} h={355} pt={72} mt={128} />
					<Image src={PWHT3} w={755} h={355} pt={48} />
					<Container>
						<Text ml={90} c={"#262728"} fz={20} mt={64}>
							Advantages of PWHT
						</Text>
						<Text ml={90} c={"#e4e8ed"} fz={12} mt={24} w={588} fw={400}>
							<List>
								<List.Item fz={12} c={"#555459"}>
									PWHT uses a technique that reduces or redistributes the Residual Stress formed by
									the welding Process by involving 4-step processes like Pre-Heating, Heating,
									Soaking & Cooling the Welded Surface to controlled temperatures for a specified
									amount of time. This enhances the properties of the welded surface.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									Helps to improve the Metallurgical Structure.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									Helps to improve the Ductility of the Material.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									Reduces the risk of Brittle Fracture as the Ductility increases.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									Relaxed Thermal Stress due to the redistribution of Residual Stresses.
								</List.Item>
							</List>
						</Text>
					</Container>
					<Container>
						<Text ml={90} c={"#262728"} fz={20} mt={64}>
							Safety and Precautions
						</Text>
						<Text ml={90} c={"#e4e8ed"} fz={12} mt={24} w={588} fw={400}>
							<List>
								<List.Item fz={12} c={"#555459"}>
									PWHT must be performed by certified experts with experience in this field.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									The portion exposed to PWHT must be covered properly to protect it from rain or
									wind.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									A hardness test must be performed to check if Post weld heat treatment is
									successfully performed.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									Some metals and alloys can experience cracks during PWHT. Therefore, the alloy
									system must be taken into account.
								</List.Item>
								<List.Item fz={12} c={"#555459"}>
									Thermocouples are used for monitoring PWHT to assure heating rates, cooling rates,
									and hold temperature is within standard specifications. Along with thermocouples
									computer software is used to provide documentation about PWHT.
								</List.Item>
							</List>
						</Text>
					</Container>
				</Paper>

				<Grid>
					<Grid.Col span={12}>
						<Image src={Rect3715} h={660} w={768} pos="absolute" />
						<Image src={SixZone} w={588} h={528} pos={"absolute"} ml={90} mt={15} />
						<Button
							variant="default"
							color="#FFF"
							mt={540}
							ml={312}
							radius={0}
							pos={"absolute"}
							tt={"uppercase"}
						>
							visit prc 6000
						</Button>
					</Grid.Col>
					<Grid.Col span={12}>
						<Text ml={90} c={"#f6f6f6"} fz={20} mt={754}>
							PWHT Temperature Controller - PRC 6000
						</Text>
						<Text ml={90} c={"#e4e8ed"} fz={12} mt={24} w={588} fw={400}>
							Libratherm offers Ramp/Soak Programmable PID Temperature Controller – PRC-489 which is
							designed to improve reliability, accuracy, and control for all temperature control
							applications. It features Ramp and Soak functions. The single pattern of a total of 16
							(ramp/soak) steps can be programmed and stored in the memory. It can also be used as
							single set point control when the ramp/soak profile control is not desired. The
							controllers are calibrated for a K-type thermocouple.
						</Text>

						<Text ml={90} c={"#f6f6f6"} fz={20} mt={64}>
							Features
						</Text>

						<Text ml={90} c={"#e4e8ed"} fz={12} mt={24} w={588} fw={400}>
							<List>
								<List.Item>Accepts standard K type thermocouple</List.Item>
								<List.Item>
									Control output of Relay / TRAIC / DC pulse / (4-20)mA/ (0-5)Volt.
								</List.Item>
								<List.Item>Servo start from the current process temperature.</List.Item>
								<List.Item>
									1 to 16 programmable ramp/soak steps with rate programming facility.
								</List.Item>
								<List.Item>Master / Slave concept with 1 master and max. 30 slaves.</List.Item>
								<List.Item>
									Each controller can be configured as master or slave with 1 master and many
									slaves.
								</List.Item>
								<List.Item>
									Can be used as single set point control with online set point change facility.
								</List.Item>
								<List.Item>
									Auto Tracking feature to ensure same rate of heating/cooling even after power
									failure / resumption.
								</List.Item>
								<List.Item>
									Deviation hold above and below the set point for assured heating ramp and cooling
									ramp.
								</List.Item>
							</List>
						</Text>
					</Grid.Col>
					<Grid.Col span={12} mt={30}>
						<Image src={Rect3716} h={660} w={768} pos="absolute" />
						<Image src={Img440} w={588} h={528} pos={"absolute"} ml={90} mt={15} />

						<Button
							variant="default"
							color="#FFF"
							mt={540}
							ml={312}
							radius={0}
							pos={"absolute"}
							tt={"uppercase"}
						>
							visit prc 6000
						</Button>
					</Grid.Col>
					<Grid.Col span={12}>
						<Text ml={90} c={"#f6f6f6"} fz={20} mt={754}>
							Ramp/Soak Programmable PID Temperature Controller – PRC-489
						</Text>
						<Text ml={90} c={"#e4e8ed"} fz={12} mt={24} w={588} fw={400}>
							Libratherm offers Ramp/Soak Programmable PID Temperature Controller – PRC-489 which is
							designed to improve reliability, accuracy, and control for all temperature control
							applications. It features Ramp and Soak functions. The single pattern of a total of 16
							(ramp/soak) steps can be programmed and stored in the memory. It can also be used as
							single set point control when the ramp/soak profile control is not desired. The
							controllers are calibrated for a K-type thermocouple.
						</Text>

						<Text ml={90} c={"#f6f6f6"} fz={20} mt={64}>
							Features
						</Text>

						<Text ml={90} c={"#e4e8ed"} fz={12} mt={24} w={588} fw={400}>
							<List>
								<List.Item>Accepts standard K type thermocouple</List.Item>
								<List.Item>
									Control output of Relay / TRAIC / DC pulse / (4-20)mA/ (0-5)Volt.
								</List.Item>
								<List.Item>Servo start from the current process temperature.</List.Item>
								<List.Item>
									1 to 16 programmable ramp/soak steps with rate programming facility.
								</List.Item>
								<List.Item>Master / Slave concept with 1 master and max. 30 slaves.</List.Item>
								<List.Item>
									Each controller can be configured as master or slave with 1 master and many
									slaves.
								</List.Item>
								<List.Item>
									Can be used as single set point control with online set point change facility.
								</List.Item>
								<List.Item>
									Auto Tracking feature to ensure same rate of heating/cooling even after power
									failure / resumption.
								</List.Item>
								<List.Item>
									Deviation hold above and below the set point for assured heating ramp and cooling
									ramp.
								</List.Item>
							</List>
						</Text>
					</Grid.Col>
				</Grid>
			</Paper>
		</>
	);
};

export default Services;

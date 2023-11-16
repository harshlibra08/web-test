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
	Stack,
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
			<Paper
				w={{ base: 360, lg: 1440 }}
				h={{ base: 5000, lg: 5340 }}
				mt={{ base: 40, lg: 50 }}
				bg={"black"}
			>
				<Stack>
					<Text
						fz={{ base: 20, lg: 32 }}
						mt={{ base: 40, lg: 91 }}
						ml={{ base: 16, lg: 114 }}
						c={"#F6F6F6"}
					>
						Services
					</Text>
					<Divider size="xs" w={{ base: 328, lg: 1212 }} ml={{ base: 16, lg: 114 }} />
				</Stack>
				<Tabs
					color="rgba(255, 255, 255, 1)"
					defaultValue="Data"
					ml={{ base: 16, lg: 114 }}
					maw={{ base: 360, lg: 1212 }}
				>
					<Tabs.List hiddenFrom="xs">
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
					<Tabs.List visibleFrom="md">
						<Tabs.Tab value="Data">
							<Text fz={{ base: 9, lg: 14 }} c={"#FFF"} ta={"center"}>
								Data Acquisition Software
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="IOT">
							<Text fz={{ base: 9, lg: 14 }} c={"#FFF"} ta={"center"}>
								IoT (Internet of Things)
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="pwht">
							<Text fz={{ base: 9, lg: 14 }} c={"#FFF"} ta={"center"}>
								Post Weld Heat Treatment (PWHT) Vision
							</Text>
						</Tabs.Tab>
					</Tabs.List>
				</Tabs>

				<Text
					c={"#f6f6f6"}
					ml={{ base: 100, lg: 455 }}
					w={550}
					ta={"center"}
					fz={{ base: 14, lg: 32 }}
					pt={{ base: 40 }}
				>
					Post Weld Heat Treatment (PWHT)
				</Text>

				<Text
					ml={{ base: 16, lg: 217 }}
					c={"#e4e8ed"}
					ta="left"
					fz={{ base: 12 }}
					mt={{ base: 16, lg: 34 }}
					w={{ base: 328, lg: 1006 }}
					fw={400}
				>
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

				<Image
					src={PWHT}
					ml={{ base: 16, lg: 385 }}
					w={{ base: 320, lg: 670 }}
					h={{ base: 181, lg: 372 }}
					mt={{ base: 24, lg: 64 }}
				/>
				<Text
					ml={{ base: 16, lg: 217 }}
					c={"#f6f6f6"}
					fz={{ base: 14, lg: 24 }}
					mt={{ base: 40, lg: 64 }}
				>
					What happens in PWHT?
				</Text>

				<Text
					ml={{ base: 16, lg: 217 }}
					c={"#e4e8ed"}
					fz={{ base: 12, lg: 16 }}
					mt={{ base: 24, lg: 32 }}
					w={{ base: 327, lg: 1006 }}
					fw={400}
				>
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

				<Paper
					h={{ base: 1043, lg: 1773 }}
					w={{ base: 360, lg: 1440 }}
					bg={"white"}
					radius={0}
					left={{ base: 0 }}
				>
					<Image
						src={PWHT2}
						w={{ base: 328, lg: 1006 }}
						h={{ base: 194, lg: 404 }}
						mt={{ base: 72, lg: 128 }}
						ml={{ lg: 218 }}
					/>
					<Image
						src={PWHT3}
						w={{ base: 360, lg: 1006 }}
						h={{ base: 162, lg: 402 }}
						ml={{ lg: 218 }}
						mt={{ base: 48, lg: 103 }}
					/>

					<Text
						ml={{ base: 16, lg: 218 }}
						c={"#262728"}
						fz={{ base: 14, lg: 24 }}
						mt={{ base: 40, lg: 128 }}
						fw={600}
					>
						Advantages of PWHT
					</Text>
					<Text
						pt={{ base: 16, lg: 32 }}
						fz={{ base: 12, lg: 16 }}
						ml={{ base: 16, lg: 218 }}
						maw={{ base: 328, lg: 1006 }}
					>
						<List>
							<List.Item fz={{ base: 12 }} c={"#555459"}>
								PWHT uses a technique that reduces or redistributes the Residual Stress formed by
								the welding Process by involving 4-step processes like Pre-Heating, Heating, Soaking
								& Cooling the Welded Surface to controlled temperatures for a specified amount of
								time. This enhances the properties of the welded surface.
							</List.Item>
							<List.Item fz={{ base: 12 }} c={"#555459"}>
								Helps to improve the Metallurgical Structure.
							</List.Item>
							<List.Item fz={{ base: 12 }} c={"#555459"}>
								Helps to improve the Ductility of the Material.
							</List.Item>
							<List.Item fz={{ base: 12 }} c={"#555459"}>
								Reduces the risk of Brittle Fracture as the Ductility increases.
							</List.Item>
							<List.Item fz={{ base: 12 }} c={"#555459"}>
								Relaxed Thermal Stress due to the redistribution of Residual Stresses.
							</List.Item>
						</List>
					</Text>

					<Text
						ml={{ base: 16, lg: 218 }}
						c={"#262728"}
						fz={{ base: 14, lg: 24 }}
						mt={{ base: 40, lg: 64 }}
						fw={600}
					>
						Safety and Precautions
					</Text>
					<Text
						pt={{ base: 16, lg: 32 }}
						fz={{ base: 12, lg: 16 }}
						ml={{ base: 16, lg: 218 }}
						maw={{ base: 328, lg: 1006 }}
					>
						<List>
							<List.Item fz={{ base: 12 }} c={"#555459"}>
								PWHT must be performed by certified experts with experience in this field.
							</List.Item>
							<List.Item fz={{ base: 12 }} c={"#555459"}>
								The portion exposed to PWHT must be covered properly to protect it from rain or
								wind.
							</List.Item>
							<List.Item fz={{ base: 12 }} c={"#555459"}>
								A hardness test must be performed to check if Post weld heat treatment is
								successfully performed.
							</List.Item>
							<List.Item fz={{ base: 12 }} c={"#555459"}>
								Some metals and alloys can experience cracks during PWHT. Therefore, the alloy
								system must be taken into account.
							</List.Item>
							<List.Item fz={{ base: 12 }} c={"#555459"}>
								Thermocouples are used for monitoring PWHT to assure heating rates, cooling rates,
								and hold temperature is within standard specifications. Along with thermocouples
								computer software is used to provide documentation about PWHT.
							</List.Item>
						</List>
					</Text>
				</Paper>

				<Grid>
					<Grid.Col span={{ base: 12, lg: 6 }}>
						<Image
							src={Rect3715}
							h={{ base: 360, lg: 871 }}
							w={{ base: 360, lg: 720 }}
							pos="absolute"
							pl={{ base: 0 }}
							left={{ base: 0 }}
						/>
						<Image
							src={SixZone}
							w={{ base: 308, lg: 444 }}
							h={{ base: 283, lg: 407 }}
							pos={"absolute"}
							ml={{ base: 26, lg: 134 }}
							mt={{ base: 15, lg: 175 }}
						/>
						<Button
							variant="default"
							color="#FFF"
							mt={{ base: 298, lg: 646 }}
							ml={{ base: 112, lg: 288 }}
							radius={0}
							pos={"absolute"}
							tt={"uppercase"}
						>
							visit prc 6000
						</Button>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 6 }}>
						<Text
							fz={{ base: 14, lg: 24 }}
							fw={600}
							mt={{ base: 400, lg: 128 }}
							ml={{ base: 17, lg: 50 }}
							c={"#f6f6f6"}
						>
							PWHT Temperature Controller - PRC 6000
						</Text>
						<Text
							w={{ base: 328, lg: 559 }}
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							fw={400}
							ml={{ base: 17, lg: 50 }}
							mt={{ base: 24 }}
						>
							Libratherm offers Ramp/Soak Programmable PID Temperature Controller – PRC-489 which is
							designed to improve reliability, accuracy, and control for all temperature control
							applications. It features Ramp and Soak functions. The single pattern of a total of 16
							(ramp/soak) steps can be programmed and stored in the memory. It can also be used as
							single set point control when the ramp/soak profile control is not desired. The
							controllers are calibrated for a K-type thermocouple.
						</Text>

						<Text
							fz={{ base: 14, lg: 24 }}
							fw={600}
							mt={{ base: 48, lg: 64 }}
							ml={{ base: 17, lg: 50 }}
							c={"#f6f6f6"}
							maw={{ base: 328 }}
						>
							Features
						</Text>

						<Text
							w={{ base: 320, lg: 552 }}
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							fw={400}
							ml={{ base: 16, lg: 50 }}
							mt={14}
						>
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
					<Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 1, lg: 2 }}>
						<Image
							src={Rect3716}
							w={{ base: 358, lg: 720 }}
							h={{ base: 354, lg: 1207 }}
							pos={"absolute"}
							left={{ base: 0, lg: 719 }}
						/>
						<Image
							src={Img440}
							pos={"absolute"}
							w={{ base: 281, lg: 449 }}
							h={{ base: 229, lg: 449 }}
							ml={{ base: 39, lg: 136 }}
							mt={{ lg: 179 }}
						/>

						<Button
							variant="default"
							color="#FFF"
							mt={{ base: 292, lg: 664 }}
							ml={{ base: 112, lg: 293 }}
							radius={0}
							pos={"absolute"}
							tt={"uppercase"}
						>
							visit prc 6000
						</Button>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 2, lg: 1 }}>
						<Text
							fz={{ base: 14, lg: 24 }}
							fw={600}
							w={{ base: 327, lg: 530 }}
							mt={{ base: 394, lg: 128 }}
							ml={{ base: 16, lg: 115 }}
							c={"#f6f6f6"}
						>
							Ramp/Soak Programmable PID Temperature Controller – PRC-489
						</Text>
						<Text
							w={{ base: 328, lg: 552 }}
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 14 }}
							fw={400}
							ml={{ base: 16, lg: 114 }}
							mt={{ base: 24, lg: 32 }}
						>
							Libratherm offers Ramp/Soak Programmable PID Temperature Controller – PRC-489 which is
							designed to improve reliability, accuracy, and control for all temperature control
							applications. It features Ramp and Soak functions. The single pattern of a total of 16
							(ramp/soak) steps can be programmed and stored in the memory. It can also be used as
							single set point control when the ramp/soak profile control is not desired. The
							controllers are calibrated for a K-type thermocouple.
						</Text>

						<Text
							fz={{ base: 14, lg: 24 }}
							w={514}
							h={44}
							fw={600}
							mt={{ base: 48, lg: 64 }}
							ml={{ base: 16, lg: 114 }}
							c={"#f6f6f6"}
						>
							Features
						</Text>

						<Text
							w={{ base: 320, lg: 556 }}
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							fw={400}
							ml={{ base: 16, lg: 114 }}
							mt={{ base: 14, lg: 32 }}
						>
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

				{/* <Text c={"#f6f6f6"} ta="center" fz={32} pt={64}>
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
						<Image src={Rect3715} h={871} w={720} pos="absolute" pl={{base:0}} left={{base:0}} />
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
						<Text h={114} w={596} c={"#e4e8ed"} fz={{base:14}} fw={400} ml={50} mt={{base:24}}>
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
				</Grid> */}
			</Paper>
			{/**Mobile View */}
			{/* <Paper w={{base:360}} h={5000} bg={"black"} hiddenFrom="xs">
				<Group wrap="nowrap">
					<Box w="100%">
						<Text fz={20} mt={91} ml={{base:16}} c={"#f6f6f6"}>
							Services
						</Text>
						<Divider size="xs" my={16} ml={{base:16}} w={344} />
					</Box>
				</Group>
				<Tabs color="rgba(255, 255, 255, 1)" defaultValue="pwht" ml={{base:16}}>
					<Tabs.List>
						<Tabs.Tab value="Data">
							<Text fz={{base:9}} ta={"center"} c={"#FFF"}>
								Data Acquisition <br />
								Software
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="IOT">
							<Text fz={{base:9}} ta={"center"} c={"#FFF"}>
								IoT (Internet <br /> of Things)
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="pwht">
							<Text fz={{base:9}} ta={"center"} c={"#FFF"}>
								Post Weld Heat <br /> Treatment (PWHT) Vision
							</Text>
						</Tabs.Tab>
					</Tabs.List>
				</Tabs>

				<Text c={"#f6f6f6"} ml={{ base:  100}}w={160} ta={"center"} fz={{base:14}} pt={{base:40}}>
					Post Weld Heat Treatment (PWHT)
				</Text>

				<Text ml={{base:16}} c={"#e4e8ed"} ta="left" fz={{base:12}} mt={{base:16}} w={{base:328}} fw={400}>
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

				<Image src={PWHT} ml={{base:16}} w={{base:320}} h={{base:181}} mt={{base:24}} />
				<Text ml={{base:16}} c={"#f6f6f6"} fz={{base:14}} mt={{base:40}}>
					What happens in PWHT?
				</Text>

				<Text ml={{base:16}} c={"#e4e8ed"} fz={{base:12}} mt={{base:24}} w={{base:327}} fw={400}>
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

				<Paper h={1073} w={{base:360}} bg={"white"} radius={0} left={{base:0}}>
					<Image src={PWHT2} w={{base:328}} h={{base:194}} mt={{base:72}} />
					<Image src={PWHT3} w={{base:360}} h={{base:162}} ml={0} mt={{base:48}} />
					<Container>
						<Text ml={{base:16}} c={"#262728"} fz={{base:14}} mt={{base:40}} fw={600}>
							Advantages of PWHT
						</Text>
						<Text pt={16} fz={{base:12}}>
							<List>
								<List.Item fz={{base:12}} c={"#555459"}>
									PWHT uses a technique that reduces or redistributes the Residual Stress formed by
									the welding Process by involving 4-step processes like Pre-Heating, Heating,
									Soaking & Cooling the Welded Surface to controlled temperatures for a specified
									amount of time. This enhances the properties of the welded surface.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									Helps to improve the Metallurgical Structure.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									Helps to improve the Ductility of the Material.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									Reduces the risk of Brittle Fracture as the Ductility increases.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									Relaxed Thermal Stress due to the redistribution of Residual Stresses.
								</List.Item>
							</List>
						</Text>
					</Container>
					<Container>
						<Text ml={{base:16}} c={"#262728"} fz={{base:14}} mt={{base:40}} fw={600}>
							Safety and Precautions
						</Text>
						<Text pt={16} fz={{base:12}}>
							<List>
								<List.Item fz={{base:12}} c={"#555459"}>
									PWHT must be performed by certified experts with experience in this field.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									The portion exposed to PWHT must be covered properly to protect it from rain or
									wind.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									A hardness test must be performed to check if Post weld heat treatment is
									successfully performed.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									Some metals and alloys can experience cracks during PWHT. Therefore, the alloy
									system must be taken into account.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									Thermocouples are used for monitoring PWHT to assure heating rates, cooling rates,
									and hold temperature is within standard specifications. Along with thermocouples
									computer software is used to provide documentation about PWHT.
								</List.Item>
							</List>
						</Text>
					</Container>
				</Paper>

				<Grid mt={33}>
					<Grid.Col span={{base: 12}}>
						<Image src={Rect3715} h={{base:360}} w={{base:360}} pos="absolute" pl={{base:0}} left={{base:0}} />
						<Image src={SixZone} w={{base:308}} h={{base:283}} pos={"absolute"} ml={{base:26}} mt={{base:15}} />
						<Button
							variant="default"
							color="#FFF"
							mt={{base:298}}
							ml={{base:112}}
							radius={0}
							pos={"absolute"}
							tt={"uppercase"}
						>
							visit prc 6000
						</Button>
					</Grid.Col>
					<Grid.Col span={{base: 12}}>
						<Text fz={{base:14}} fw={600} mt={{base:400}} ml={{base:17}} c={"#f6f6f6"}>
							PWHT Temperature Controller - PRC 6000
						</Text>
						<Text w={{base:328}} c={"#e4e8ed"} fz={{base:12}} fw={400} ml={{base:16}} mt={{base:24}}>
							Libratherm offers Ramp/Soak Programmable PID Temperature Controller – PRC-489 which is
							designed to improve reliability, accuracy, and control for all temperature control
							applications. It features Ramp and Soak functions. The single pattern of a total of 16
							(ramp/soak) steps can be programmed and stored in the memory. It can also be used as
							single set point control when the ramp/soak profile control is not desired. The
							controllers are calibrated for a K-type thermocouple.
						</Text>

						<Text fz={{base:14}} fw={600} mt={{base:48}} ml={{base:17}} c={"#f6f6f6"}>
							Features
						</Text>

						<Text c={"#e4e8ed"} fz={{base:12}} w={{base:320}} fw={400} mt={{base:24}}>
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
					<Grid.Col span={{base: 12}}>
						<Image src={Rect3716} w={{base:358}} h={{base:354}} pos={"absolute"} left={{base:0}} />
						<Image src={Img440} pos={"absolute"} w={{base:281}} h={{base:229}} ml={{base:39}} mt={{base:35}} />

						<Button
							variant="default"
							color="#FFF"
							mt={{base:292}}
							ml={{base:112}}
							radius={0}
							pos={"absolute"}
							tt={"uppercase"}
						>
							visit prc 6000
						</Button>
					</Grid.Col>
					<Grid.Col span={{base: 12}}>
						<Text fz={{base:14}} fw={600} w={{base:327}} mt={394} ml={{base:16}} c={"#f6f6f6"}>
							Ramp/Soak Programmable PID Temperature Controller – PRC-489
						</Text>
						<Text w={{base:328}} c={"#e4e8ed"} fz={{base:12}} fw={400} ml={{base:16}} mt={{base:24}}>
							Libratherm offers Ramp/Soak Programmable PID Temperature Controller – PRC-489 which is
							designed to improve reliability, accuracy, and control for all temperature control
							applications. It features Ramp and Soak functions. The single pattern of a total of 16
							(ramp/soak) steps can be programmed and stored in the memory. It can also be used as
							single set point control when the ramp/soak profile control is not desired. The
							controllers are calibrated for a K-type thermocouple.
						</Text>

						<Text fz={{base:14}} w={514} h={44} fw={600} mt={{base:48}} ml={{base:16}} c={"#f6f6f6"}>
							Features
						</Text>

						<Text w={{base:320}} c={"#e4e8ed"} fz={{base:12}} fw={400} mt={14}>
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
			</Paper> */}
			{/**Tablet View */}
			{/* <Paper w={768} h={5600} bg={"black"} hiddenFrom="md" visibleFrom="xs">
				<Text fz={32} pt={91} ml={90} c={"#f6f6f6"}>
					Services
				</Text>
				<Divider size="md" my={26} w={768} mx={90} />
				<Tabs color="rgba(255, 255, 255, 1)" defaultValue="pwht" ml={90} maw={768}>
					<Tabs.List>
						<Tabs.Tab value="Data">
							<Text fz={{base:14}} c={"#FFF"} ta={"center"}>
								Data Acquisition <br />
								Software
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="IOT">
							<Text fz={{base:14}} c={"#FFF"} ta={"center"} ml={90}>
								IoT (Internet <br /> of Things)
							</Text>
						</Tabs.Tab>
						<Tabs.Tab value="pwht">
							<Text fz={{base:14}} c={"#FFF"} ta={"center"} ml={90}>
								Post Weld Heat <br /> Treatment (PWHT) Vision
							</Text>
						</Tabs.Tab>
					</Tabs.List>
				</Tabs>

				<Text c={"#f6f6f6"} w={588} ta={"center"} mx={90} fz={32} pt={{base:40}}>
					Post Weld Heat Treatment (PWHT)
				</Text>

				<Text ml={90} c={"#e4e8ed"} fz={{base:12}} mt={18} w={588} fw={400}>
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

				<Image src={PWHT} ml={90} w={588} h={355} mt={{base:24}} />
				<Text ml={90} c={"#f6f6f6"} fz={20} mt={64}>
					What happens in PWHT?
				</Text>

				<Text ml={90} c={"#e4e8ed"} fz={{base:12}} mt={{base:24}} w={588} fw={400}>
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

				<Paper h={1373} w={768} bg={"white"} radius={0} left={{base:0}}>
					<Image src={PWHT2} w={755} h={355} pt={72} mt={128} />
					<Image src={PWHT3} w={755} h={355} pt={48} />
					<Container>
						<Text ml={90} c={"#262728"} fz={20} mt={64}>
							Advantages of PWHT
						</Text>
						<Text ml={90} c={"#e4e8ed"} fz={{base:12}} mt={{base:24}} w={588} fw={400}>
							<List>
								<List.Item fz={{base:12}} c={"#555459"}>
									PWHT uses a technique that reduces or redistributes the Residual Stress formed by
									the welding Process by involving 4-step processes like Pre-Heating, Heating,
									Soaking & Cooling the Welded Surface to controlled temperatures for a specified
									amount of time. This enhances the properties of the welded surface.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									Helps to improve the Metallurgical Structure.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									Helps to improve the Ductility of the Material.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									Reduces the risk of Brittle Fracture as the Ductility increases.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									Relaxed Thermal Stress due to the redistribution of Residual Stresses.
								</List.Item>
							</List>
						</Text>
					</Container>
					<Container>
						<Text ml={90} c={"#262728"} fz={20} mt={64}>
							Safety and Precautions
						</Text>
						<Text ml={90} c={"#e4e8ed"} fz={{base:12}} mt={{base:24}} w={588} fw={400}>
							<List>
								<List.Item fz={{base:12}} c={"#555459"}>
									PWHT must be performed by certified experts with experience in this field.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									The portion exposed to PWHT must be covered properly to protect it from rain or
									wind.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									A hardness test must be performed to check if Post weld heat treatment is
									successfully performed.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									Some metals and alloys can experience cracks during PWHT. Therefore, the alloy
									system must be taken into account.
								</List.Item>
								<List.Item fz={{base:12}} c={"#555459"}>
									Thermocouples are used for monitoring PWHT to assure heating rates, cooling rates,
									and hold temperature is within standard specifications. Along with thermocouples
									computer software is used to provide documentation about PWHT.
								</List.Item>
							</List>
						</Text>
					</Container>
				</Paper>

				<Grid>
					<Grid.Col span={{base: 12}}>
						<Image src={Rect3715} h={660} w={768} pos="absolute" />
						<Image src={SixZone} w={588} h={528} pos={"absolute"} ml={90} mt={{base:15}} />
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
					<Grid.Col span={{base: 12}}>
						<Text ml={90} c={"#f6f6f6"} fz={20} mt={754}>
							PWHT Temperature Controller - PRC 6000
						</Text>
						<Text ml={90} c={"#e4e8ed"} fz={{base:12}} mt={{base:24}} w={588} fw={400}>
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

						<Text ml={90} c={"#e4e8ed"} fz={{base:12}} mt={{base:24}} w={588} fw={400}>
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
					<Grid.Col span={{base: 12}} mt={30}>
						<Image src={Rect3716} h={660} w={768} pos="absolute" />
						<Image src={Img440} w={588} h={528} pos={"absolute"} ml={90} mt={{base:15}} />

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
					<Grid.Col span={{base: 12}}>
						<Text ml={90} c={"#f6f6f6"} fz={20} mt={754}>
							Ramp/Soak Programmable PID Temperature Controller – PRC-489
						</Text>
						<Text ml={90} c={"#e4e8ed"} fz={{base:12}} mt={{base:24}} w={588} fw={400}>
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

						<Text ml={90} c={"#e4e8ed"} fz={{base:12}} mt={{base:24}} w={588} fw={400}>
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
			</Paper> */}
		</>
	);
};

export default Services;

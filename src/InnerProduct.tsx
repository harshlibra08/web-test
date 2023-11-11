import {
	Paper,
	Grid,
	Divider,
	Group,
	ActionIcon,
	rem,
	List,
	UnstyledButton,
	Box,
	Stack,
	Autocomplete,
	Card,
	Image,
	Text,
	Select,
	NumberInput,
	Table,
	ScrollArea,
	NumberInputHandlers,
	Tabs,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import Category from "./Assets/category.png";

import RectangleGreyLeft from "./Assets/Rectangle1027Grey.png";
import Panel from "./Assets/panel.png";
import PanelFront from "./Assets/panelfront1.png";
import Panel2 from "./Assets/panel2.png";
import PanelBg from "./Assets/panelbg.png";
import Model2 from "./Assets/modl2.png";
import InnerYellowBg from "./Assets/inneryellowbg.png";
import { OptionsButton, PrimaryButton } from "./BaseApp/App";
type Props = {};

const InnerProduct = (props: Props) => {
	const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
	const [value, setValue] = useState<number | "">(0);
	const handlers = useRef<NumberInputHandlers>();

	return (
		<>
			<Paper w={{ base: 360 }} h={{ base: 6555 }} mt={30} hiddenFrom="xs">
				<Grid>
					<Grid.Col span={{ base: 12 }}>
						<Image src={RectangleGreyLeft} h={{ base: 401 }} w={{ base: 360 }} pos="absolute" />
						<Image
							src={Panel}
							alt="Vision"
							w={{ base: 181 }}
							h={{ base: 231 }}
							pos={"absolute"}
							ml={89}
							mt={40}
						/>

						<Image
							src={PanelBg}
							alt="Vision"
							w={{ base: 64 }}
							h={{ base: 63 }}
							pos={"absolute"}
							left={75}
							mt={307}
						/>
						<Image src={PanelFront} w={{ base: 60 }} h={60} pos={"absolute"} left={75} mt={307} />

						<Image
							src={PanelBg}
							alt="Vision"
							w={{ base: 64 }}
							h={{ base: 63 }}
							pos={"absolute"}
							left={148}
							mt={307}
						/>
						<Image
							src={Panel2}
							alt="Vision"
							w={{ base: 53 }}
							h={60}
							pos={"absolute"}
							left={148}
							mt={307}
						/>

						<Image
							src={PanelBg}
							alt="Vision"
							w={{ base: 64 }}
							h={{ base: 63 }}
							pos={"absolute"}
							left={224}
							mt={307}
						/>
						<Image src={PanelFront} w={{ base: 62 }} h={60} pos={"absolute"} left={224} mt={307} />
					</Grid.Col>
					<Grid.Col span={{ base: 12 }} mt={{ base: 425 }}>
						<Text fz={{ base: 16 }} w={{ base: 328 }} fw={600} ml={{ base: 16 }} c="#292929">
							Three Phase Thyristor Power Controller – POW-3-PA{" "}
						</Text>
						<Text c="#777" fz={{ base: 10 }} fw={400} ml={{ base: 16 }} mt={{ base: 4 }}>
							Digital Indicator : Category
						</Text>
						<Text c="#262728" fz={20} fw={600} ml={{ base: 16 }} mt={{ base: 16 }}>
							₹ 3,000-₹ 4000
						</Text>
						<Text c="#FF6951" fz={{ base: 10 }} fw={400} ml={{ base: 16 }} mt={{ base: 4 }}>
							Prices are inclusive of Delivery Charges.
						</Text>
						<Text c="#555459" fz={{ base: 12 }} fw={300} ml={{ base: 16 }} mt={{ base: 24 }}>
							Configuration: (1 AI + 1 AO )<br /> Size: 96 x 96 x 75
							<br /> Part No: 1304
						</Text>
						<Group ml={{ base: 16 }} mt={{ base: 24 }} w={500}>
							<Text c="#555459" fz={{ base: 12 }}>
								Quantity
							</Text>
							<Group gap={0}>
								<ActionIcon
									size={28}
									w={{ base: 29 }}
									variant="default"
									style={{ borderRadius: 0 }}
									onClick={() => handlers.current?.decrement}
								>
									–
								</ActionIcon>
								<NumberInput
									hideControls
									value={value}
									onChange={(val) => setValue(value)}
									handlersRef={handlers}
									max={10}
									min={0}
									step={1}
									size="28px"
									styles={{
										input: { width: rem(54), textAlign: "center", borderRadius: 0, fontSize: 12 },
									}}
								/>
								<ActionIcon
									size={28}
									variant="default"
									style={{ borderRadius: 0 }}
									onClick={() => handlers.current?.increment()}
								>
									+
								</ActionIcon>
							</Group>
						</Group>

						<Stack ml={{ base: 16 }} mt={{ base: 24 }} w={{ base: 328 }}>
							<Select
								label="Select Part Number"
								placeholder="Choose an option"
								data={[
									{ value: "react", label: "React" },
									{ value: "ng", label: "Angular" },
									{ value: "svelte", label: "Svelte" },
									{ value: "vue", label: "Vue" },
								]}
							></Select>
							<Select
								label="Select Relay Card"
								placeholder="Choose an option"
								data={[
									{ value: "react", label: "React" },
									{ value: "ng", label: "Angular" },
									{ value: "svelte", label: "Svelte" },
									{ value: "vue", label: "Vue" },
								]}
							></Select>
						</Stack>
						<Group mt={{ base: 24 }} ml={{ base: 16 }}>
							<PrimaryButton w={157}>Add to Cart</PrimaryButton>
							<OptionsButton w={155}>Buy Now</OptionsButton>
						</Group>

						<Text
							fw={600}
							fz={{ base: 14 }}
							c="#262728"
							ml={{ base: 16 }}
							w={{ base: 308 }}
							mt={{ base: 33 }}
						>
							{" "}
							Key Features
							<List mt={{ base: 19 }}>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Accepts thermocouple, RTD(Pt-100), Infrared pyrometer.
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Both switching and linear PID control outputs.
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Servo start from the process temperature.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									User programmable 1-10 different patterns of ramp/soak steps.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Retention and auto-execution of program in case of power failure.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Facility to use as PID and ON / OFF controller.{" "}
								</List.Item>
							</List>
						</Text>
						<Text
							fw={600}
							fz={{ base: 14 }}
							c="#262728"
							ml={{ base: 16 }}
							w={{ base: 308 }}
							mt={{ base: 33 }}
						>
							{" "}
							Applications{" "}
							<List mt={{ base: 19 }}>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Accepts thermocouple, RTD(Pt-100), Infrared pyrometer.
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Both switching and linear PID control outputs.
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Servo start from the process temperature.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									User programmable 1-10 different patterns of ramp/soak steps.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Retention and auto-execution of program in case of power failure.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Facility to use as PID and ON / OFF controller.{" "}
								</List.Item>
							</List>
						</Text>
					</Grid.Col>
				</Grid>
				<Paper w={{ base: 360 }} withBorder mt={{ base: 50 }}>
					<Tabs c={"#555459"} ml={{ base: 16 }} defaultValue={"desc"}>
						<Tabs.List h={{ base: 63 }}>
							<Tabs.Tab value="desc">
								<Text fz={{ base: 12 }} w={{ base: 65 }} c={"#292929"}>
									Description
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="spec">
								<Text fz={{ base: 12 }} w={{ base: 71 }} c={"#292929"}>
									Specification
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="i/o">
								<Text fz={{ base: 12 }} w={{ base: 71 }} c={"#292929"}>
									Input and output range
								</Text>
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
				</Paper>

				<Grid>
					<Grid.Col span={{ base: 12 }}>
						<Image
							src={InnerYellowBg}
							bg={"white"}
							w={{ base: 258 }}
							h={{ base: 289 }}
							pos={"absolute"}
							ml={102}
						/>

						<Image
							src={Category}
							alt="Sample"
							w={{ base: 328 }}
							h={241}
							pos={"absolute"}
							mt={{ base: 24 }}
							ml={{ base: 16 }}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12 }}>
						<Text
							fz={{ base: 16 }}
							w={{ base: 328 }}
							fw={600}
							ml={{ base: 16 }}
							mt={313}
							c={"#292929"}
						>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>

						<Text
							w={{ base: 328 }}
							style={{ color: "#555459" }}
							fz={{ base: 12 }}
							fw={400}
							mt={{ base: 12 }}
							ml={{ base: 16 }}
							lineClamp={5}
						>
							Libratherm offers Microcontroller based multiple Ramp/Soak Programmable PID
							Temperature Controller Model PRC-967 which is designed to improve reliability,
							accuracy, and control for all processing applications. It features Ramp and Soak
							functions (the capability to control the temperature and its rate of change over a
							predetermined time span).
							<br />
							<br />
							This PID Programme Controller PRC-967 offers a single profile of 16 steps that can be
							programmed into the memory with the user-friendly membrane keyboard. Separate displays
							are provided to monitor simultaneously; the Process temperature, Set temperature, and
							the Program number. They can also be used as single set point control when the profile
							control is not desired. They accept user-selectable standard temperature sensors like
							K, R, S, and B type thermocouples
							<br />
							<br />
							The Profile Controller offers both switching outputs in the form of SSR driver or
							Triac to drive external single or three-phase Solid-state relays or load contactors
							and linear analog control outputs in the form of (4-20)mA or (0-5)volt or (0-10)VDC,
							which can be used to control heater power through Thyristor Power Regulators (for an
							electrical heating system) or to control the position of a modulating motor valve (for
							oil or gas-fired heating systems). The analog outputs can be directly connected to
							Libratherm make single-phase/three-phase SCR based phase angle fired power
							controllers, which are ideally suitable for both resistive and inductive heating load.
						</Text>
						<UnstyledButton ml={{ base: 16 }} mt={{ base: 16 }} c={"#555459"}>
							<Text fz={{ base: 12 }}>Read More</Text>
						</UnstyledButton>
					</Grid.Col>
				</Grid>

				<Paper w={{ base: 360 }} bg={"#f1f1f1"} h={{ base: 716 }} mt={{ base: 36 }}>
					<Text ta="center" c="#292929" fz={{ base: 16 }} fw={600} pt={36}>
						Compare the models
					</Text>

					<ScrollArea
						w={{ base: 360 }}
						h={{ base: 620 }}
						onScrollPositionChange={onScrollPositionChange}
					>
						<Group wrap="nowrap">
							<Card bg={"#FFF"} w={156} h={{ base: 553 }} ml={{ base: 16 }} mt={20} radius={10}>
								<Text w={132} fz={{ base: 12 }} c="#555459" fw={600}>
									Temperature Indicator – DPI-902
								</Text>

								<Image src={Panel} w={73} h={{ base: 93 }} mt={{ base: 16 }} ml={20} />
								<Stack gap={8}>
									<Text c="#555459" fz={{ base: 12 }} fw={600} mt={22}>
										Key Features
									</Text>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Design
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Input
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Range
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Resolution
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
								</Stack>
							</Card>
							<Card bg={"#FFF"} w={156} h={{ base: 553 }} ml={{ base: 16 }} mt={20} radius={10}>
								<Text w={132} fz={{ base: 12 }} c="#555459" fw={600}>
									Temperature Indicator – DPI-902
								</Text>

								<Image src={Panel} w={73} h={{ base: 93 }} mt={{ base: 16 }} ml={20} />
								<Stack gap={8}>
									<Text c="#555459" fz={{ base: 12 }} fw={600} mt={22}>
										Key Features
									</Text>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Design
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Input
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Range
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Resolution
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
								</Stack>
							</Card>
							<Card bg={"#FFF"} w={156} h={{ base: 553 }} ml={{ base: 16 }} mt={20} radius={10}>
								<Text w={132} fz={{ base: 12 }} c="#555459" fw={600}>
									Temperature Indicator – DPI-902
								</Text>

								<Image src={Panel} w={73} h={{ base: 93 }} mt={{ base: 16 }} ml={20} />
								<Stack gap={8}>
									<Text c="#555459" fz={{ base: 12 }} fw={600} mt={22}>
										Key Features
									</Text>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Design
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Input
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Range
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Resolution
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
								</Stack>
							</Card>
							<Card bg={"#FFF"} w={156} h={{ base: 553 }} ml={{ base: 16 }} mt={20} radius={10}>
								<Text w={132} fz={{ base: 12 }} c="#555459" fw={600}>
									Temperature Indicator – DPI-902
								</Text>

								<Image src={Panel} w={73} h={{ base: 93 }} mt={{ base: 16 }} ml={20} />
								<Stack gap={8}>
									<Text c="#555459" fz={{ base: 12 }} fw={600} mt={22}>
										Key Features
									</Text>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Design
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Input
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Range
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12 }} fw={600}>
										Resolution
									</Text>
									<Text c="#828282" fz={{ base: 10 }} fw={400} w={{ base: 140 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
								</Stack>
							</Card>
						</Group>
					</ScrollArea>
				</Paper>

				<Paper w={{ base: 360 }} h={864} hiddenFrom="xs">
					<Text c="#292929" size="xl" fw={600} ta="center" pt={81}>
						Recently Viewed
					</Text>
					<Group wrap="nowrap" ta="center">
						<Card withBorder h={440} w={273} ml={46} mt={32}>
							<Text ta="left" fz={{ base: 14 }} c="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Image src={Panel} w={131} h={166} mt={32} ml={55} />
							<Text ta="center" fz={20} fw={400} c="#414141" mt={34}>
								₹12,600 – ₹14,700
							</Text>
							<Stack gap="xs" align="stretch" py={15}>
								<OptionsButton>Select Options</OptionsButton>
								<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
							</Stack>
						</Card>
					</Group>
				</Paper>

				<Paper w={{ base: 360 }} mt={{ base: 50 }}>
					<Tabs c={"#555459"} ml={{ base: 16 }} defaultValue={"spec"}>
						<Tabs.List h={{ base: 63 }}>
							<Tabs.Tab value="desc">
								<Text fz={{ base: 12 }} w={{ base: 65 }} c={"#292929"}>
									Description
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="spec">
								<Text fz={{ base: 12 }} w={{ base: 71 }} c={"#292929"}>
									Specification
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="i/o">
								<Text fz={{ base: 12 }} w={{ base: 111 }} c={"#292929"}>
									Input and output range
								</Text>
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
				</Paper>

				<Table w={{ base: 360 }} withRowBorders={false}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th fz={{ base: 12 }} c={"#555459"} fw={600} w={139}>
								Paramenters
							</Table.Th>
							<Table.Th fz={{ base: 12 }} c={"#555459"} fw={600}>
								Description{" "}
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Item
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								(T + RH) Sensor (OEM version)
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Model
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								HS – 440 (Only For Humidity)
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Input Sensor
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								For Temp.: Class A RTD Pt-100 element (Hayashi Denko – Japan)For %Rh: Honeywell make
								Humidity sensor HIH-4000
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Sensor Output
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								For Temperature Pt-100: 84.27 Ohms to 123.24 Ohms (-40 to 60 °C) (Alpha =
								0.00385)For %Rh: 0.0Volt @ 0% Rh and 3.33Vdc @ 100%Rh or0 to 1Vdc Linear
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Sensor Supply
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								+/- 1 °C for Thermocouple throughout the range (Software linearized)
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Humidity Range
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								0 to 100% Rh @ 0 to 50 °C0 to 90% @ 0 to 60 °C0 to 90% @ -10 to 50 °C
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Humidity Accuracy
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								+/- 3% @ 25 °C / 50 %Rh
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Type
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								+/- 3% @ 25 °C / 50 %Rh
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Size
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								20 mm dia. x 75 mm long
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Cable / Enclosure
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								2 to 5 meter PVC/PVC insulated multi-core cable with pin lugs / SS plastic.
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Precautions for use
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								Avoid condensation and drench. Avoid exposure to Saline, Inorganic and Organic Gas.g
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>

				<Paper w={{ base: 360 }} mt={{ base: 50 }}>
					<Tabs c={"#555459"} ml={{ base: 16 }} defaultValue={"i/o"}>
						<Tabs.List h={{ base: 63 }}>
							<Tabs.Tab value="desc">
								<Text fz={{ base: 12 }} w={{ base: 65 }} c={"#292929"}>
									Description
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="spec">
								<Text fz={{ base: 12 }} w={{ base: 71 }} c={"#292929"}>
									Specification
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="i/o">
								<Text fz={{ base: 12 }} w={{ base: 71 }} c={"#292929"}>
									Input and output range
								</Text>
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
				</Paper>
				<Autocomplete
					ml={{ base: 16 }}
					placeholder="Search for order Info"
					leftSection={<IconSearch size="20px" stroke={1.5} color="#555459" />}
					data={[]}
					mt={{ base: 12 }}
					radius={32}
					w={{ base: 328 }}
					h={36}
					styles={{
						input: {
							backgroundColor: "#F0F0F0",
							border: "none",
						},
					}}
				/>
				<Table ml={{ base: 16 }} mt={{ base: 12 }} w={{ base: 328 }}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{ base: 12 }}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{ base: 12 }}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Specifications
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
								and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
								°C).
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Part No.
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{ base: 16 }} mt={{ base: 12 }} w={{ base: 328 }} bg={"#f7f7f7"}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{ base: 12 }}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{ base: 12 }}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Specifications
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
								and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
								°C).
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Part No.
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{ base: 16 }} mt={{ base: 12 }} w={{ base: 328 }}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{ base: 12 }}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{ base: 12 }}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Specifications
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
								and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
								°C).
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Part No.
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{ base: 16 }} mt={{ base: 12 }} w={{ base: 328 }} bg={"#f7f7f7"}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{ base: 12 }}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{ base: 12 }}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Specifications
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
								and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
								°C).
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Part No.
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>

				<Paper w={{ base: 360 }} mt={{ base: 50 }}>
					<Tabs c={"#555459"} ml={{ base: 16 }} defaultValue={"i/o"}>
						<Tabs.List h={{ base: 63 }}>
							<Tabs.Tab value="desc">
								<Text fz={{ base: 12 }} w={{ base: 65 }} c={"#292929"}>
									Description
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="spec">
								<Text fz={{ base: 12 }} w={{ base: 71 }} c={"#292929"}>
									Specification
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="i/o">
								<Text fz={{ base: 12 }} w={{ base: 71 }} c={"#292929"}>
									Input and output range
								</Text>
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
				</Paper>
				<Autocomplete
					ml={{ base: 16 }}
					placeholder="Search for input and output"
					leftSection={<IconSearch size="20px" stroke={1.5} color="#555459" />}
					data={[]}
					mt={{ base: 12 }}
					radius={32}
					w={{ base: 328 }}
					h={36}
					styles={{
						input: {
							backgroundColor: "#F0F0F0",
							border: "none",
						},
					}}
				/>
				<Table ml={{ base: 16 }} mt={{ base: 12 }} w={{ base: 328 }}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{ base: 12 }}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{ base: 12 }}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Input
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Range (°C)
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{ base: 16 }} mt={{ base: 12 }} w={{ base: 328 }} bg={"#f7f7f7"}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{ base: 12 }}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{ base: 12 }}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Input
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Range (°C)
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{ base: 16 }} mt={{ base: 12 }} w={{ base: 328 }}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{ base: 12 }}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{ base: 12 }}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Input
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Range (°C)
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{ base: 16 }} mt={{ base: 12 }} w={{ base: 328 }} bg={"#f7f7f7"}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{ base: 12 }}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{ base: 12 }}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Input
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Range (°C)
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{ base: 16 }} mt={{ base: 12 }} w={{ base: 328 }}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{ base: 12 }}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{ base: 12 }}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Input
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Range (°C)
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{ base: 16 }} mt={{ base: 12 }} w={{ base: 328 }} bg={"#f7f7f7"}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{ base: 12 }}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{ base: 12 }}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Input
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12 }} c={"#555459"} fw={600}>
								Range (°C)
							</Table.Td>
							<Table.Td fz={{ base: 12 }} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
			</Paper>
			{/* <Paper w={1440} h={3686} mt={30} visibleFrom="md">
				<Grid>
					<Grid.Col span={6}>
						<Image
							src={RectangleGreyLeft}
							alt="Vision"
							h={639}
							w={710}
							pos="absolute"
							pl={0}
							left={0}
						/>
						<Image
							src={Panel}
							alt="Vision"
							w={256.221}
							h={327}
							pos={"absolute"}
							left={227}
							mt={114}
						/>
						<Image src={PanelBg} alt="Vision" w={{base:62}} h={60} pos={"absolute"} left={253} mt={473} />
						<Image
							src={PanelFront}
							alt="Vision"
							w={{base:62}}
							h={60}
							pos={"absolute"}
							left={253}
							mt={473}
						/>

						<Image src={PanelBg} alt="Vision"w={{base:53}} h={60} pos={"absolute"} left={333} mt={473} />
						<Image src={Panel2} alt="Vision"w={{base:53}} h={60} pos={"absolute"} left={333} mt={473} />
						<Image src={PanelBg} alt="Vision" w={{base:62}} h={60} pos={"absolute"} left={403} mt={473} />
						<Image
							src={PanelFront}
							alt="Vision"
							w={{base:62}}
							h={60}
							pos={"absolute"}
							left={403}
							mt={473}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Text size="24px" w={468} fw={600} ml={98} mt={44} c="#292929">
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Text c="#777" fz={{base:10}} fw={400} ml={98} mt={{base:4}}>
							Digital Indicator : Category
						</Text>
						<Text c="#262728" fz={20} fw={600} ml={98} mt={{base:24}}>
							₹ 4000
						</Text>
						<Text c="#FF6951" fz={{base:10}} fw={400} ml={98} mt={{base:4}}>
							Prices are inclusive of Delivery Charges.
						</Text>
						<Divider my={24} ml={98} w={558} h={0.5}></Divider>
						<Text c="#555459" fz={{base:12}} fw={300} ml={98} mt={{base:24}}>
							Configuration: (1 AI + 1 AO )<br /> Size: 96 x 96 x 75
							<br /> Part No: 1304
						</Text>
						<Group ml={98} mt={{base:24}} w={550}>
							<Select
								label="Select Part Number"
								placeholder="Choose an option"
								data={[
									{ value: "react", label: "React" },
									{ value: "ng", label: "Angular" },
									{ value: "svelte", label: "Svelte" },
									{ value: "vue", label: "Vue" },
								]}
							></Select>
							<Select
								ml={24}
								label="Select Relay Card"
								placeholder="CPC"
								data={[
									{ value: "react", label: "React" },
									{ value: "ng", label: "Angular" },
									{ value: "svelte", label: "Svelte" },
									{ value: "vue", label: "Vue" },
								]}
							></Select>
						</Group>
						<Group ml={98} mt={{base:24}} w={500}>
							<Text c="#555459" fz={{base:12}}>
								Quantity
							</Text>
							<ActionIcon size={42} variant="default">
								–
							</ActionIcon>
							<NumberInput
								hideControls
								value={value}
								// onChange={(val) => setValue(val)}
								handlersRef={handlers}
								max={10}
								min={0}
								step={1}
								styles={{ input: { width: rem(20), textAlign: "center" } }}
							/>
							<ActionIcon size={42} variant="default">
								+
							</ActionIcon>
							<PrimaryButton>Add to Cart</PrimaryButton>
							<OptionsButton>Buy Now</OptionsButton>
						</Group>
						<Text fw={400} size={"16px"} c="#262728" ml={98} w={500} mt={{base:33}}>
							{" "}
							Key Features
							<List mt={{base:16}}>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Accepts thermocouple, RTD(Pt-100), Infrared pyrometer.
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Both switching and linear PID control outputs.
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Servo start from the process temperature.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									User programmable 1-10 different patterns of ramp/soak steps.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Retention and auto-execution of program in case of power failure.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Facility to use as PID and ON / OFF controller.{" "}
								</List.Item>
							</List>
						</Text>
					</Grid.Col>
				</Grid>
				<Paper w={1440} h={{base:63}} withBorder mt={15}>
					<Group wrap="nowrap" ml={55} gap={72} pt={22}>
						<UnstyledButton>
							<Text fz={{base:12}} c="#292929" fw={400}>
								Description
							</Text>
						</UnstyledButton>
						<UnstyledButton>
							{" "}
							<Text fz={{base:12}} c="#292929" fw={400}>
								Specifications
							</Text>{" "}
						</UnstyledButton>
						<UnstyledButton>
							{" "}
							<Text fz={{base:12}} c="#292929" fw={400}>
								Input and Output Range
							</Text>
						</UnstyledButton>
						<UnstyledButton>
							{" "}
							<Text fz={{base:12}} c="#292929" fw={400}>
								Ordering Information
							</Text>
						</UnstyledButton>
					</Group>
				</Paper>

				<Grid>
					<Grid.Col span={6}>
						<Box>
							<Text
								fz={24}
								w={598}
								fw={600}
								ml={144}
								mt={105}
								style={{ lineHeight: "51.2px", color: "#292929" }}
							>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
						</Box>
						<Text
							h={331}
							w={664}
							style={{ color: "#555459" }}
							fz={{base:14}}
							fw={400}
							mb={40}
							mt={32}
							ml={144}
						>
							Libratherm offers Microcontroller based multiple Ramp/Soak Programmable PID
							Temperature Controller Model PRC-967 which is designed to improve reliability,
							accuracy, and control for all processing applications. It features Ramp and Soak
							functions (the capability to control the temperature and its rate of change over a
							predetermined time span).
							<br />
							<br />
							This PID Programme Controller PRC-967 offers a single profile of 16 steps that can be
							programmed into the memory with the user-friendly membrane keyboard. Separate displays
							are provided to monitor simultaneously; the Process temperature, Set temperature, and
							the Program number. They can also be used as single set point control when the profile
							control is not desired. They accept user-selectable standard temperature sensors like
							K, R, S, and B type thermocouples
							<br />
							<br />
							The Profile Controller offers both switching outputs in the form of SSR driver or
							Triac to drive external single or three-phase Solid-state relays or load contactors
							and linear analog control outputs in the form of (4-20)mA or (0-5)volt or (0-10)VDC,
							which can be used to control heater power through Thyristor Power Regulators (for an
							electrical heating system) or to control the position of a modulating motor valve (for
							oil or gas-fired heating systems). The analog outputs can be directly connected to
							Libratherm make single-phase/three-phase SCR based phase angle fired power
							controllers, which are ideally suitable for both resistive and inductive heating load.
						</Text>
					</Grid.Col>
					<Grid.Col span={6}>
						<Image src={InnerYellowBg} bg={"white"} w={509} h={624} pos={"absolute"} ml={203} />

						<Image src={Category} alt="Sample" w={543} h={424} pos={"absolute"} mt={96} ml={123} />
					</Grid.Col>
				</Grid>
				<Paper mt={144} ml={144}>
					<Text fz={24} w={598} h={33} fw={600} style={{ lineHeight: "51.2px" }} c="#292929">
						Specifications
					</Text>
					<Group w={1800}>
						<Stack>
							<Text c="#555459" fz={{base:14}} fw={600} mt={34}>
								Parametres
							</Text>
							<Text c="#555459" fz={{base:12}} fw={600} mt={34}>
								Item
							</Text>
							<Text c="#555459" fz={{base:12}} fw={600} mt={20}>
								Model
							</Text>
							<Text c="#555459" fz={{base:12}} fw={600} mt={20}>
								Input Sensor
							</Text>
							<Text c="#555459" fz={{base:12}} fw={600} mt={20}>
								Sensor Output
							</Text>
							<Text c="#555459" fz={{base:12}} fw={600} mt={20}>
								Sensor Supply
							</Text>
							<Text c="#555459" fz={{base:12}} fw={600} mt={20}>
								Humidity Range
							</Text>
							<Text c="#555459" fz={{base:12}} fw={600} mt={20}>
								Humidity Accuracy
							</Text>
							<Text c="#555459" fz={{base:12}} fw={600} mt={20}>
								Type
							</Text>
							<Text c="#555459" fz={{base:12}} fw={600} mt={20}>
								Size
							</Text>
							<Text c="#555459" fz={{base:12}} fw={600} mt={20}>
								Cable / Enclosure
							</Text>
							<Text c="#555459" fz={{base:12}} fw={600} mt={20}>
								Precautions for use
							</Text>
						</Stack>
						<Stack ml={110}>
							<Text c="#555459" fz={{base:14}} fw={600} mt={34}>
								Description
							</Text>
							<Text c="#828282" fz={{base:12}} fw={400} mt={34}>
								(T + RH) Sensor (OEM version)
							</Text>
							<Text c="#828282" fz={{base:12}} fw={400} mt={20}>
								HS – 440 (Only For Humidity)
							</Text>
							<Text c="#828282" fz={{base:12}} fw={400} mt={20}>
								For Temp.: Class A RTD Pt-100 element (Hayashi Denko – Japan)For %Rh: Honeywell make
								Humidity sensor HIH-4000{" "}
							</Text>
							<Text c="#828282" fz={{base:12}} fw={400} mt={20}>
								For Temperature Pt-100: 84.27 Ohms to 123.24 Ohms (-40 to 60 °C) (Alpha =
								0.00385)For %Rh: 0.0Volt @ 0% Rh and 3.33Vdc @ 100%Rh or0 to 1Vdc Linear{" "}
							</Text>
							<Text c="#828282" fz={{base:12}} fw={400} mt={20}>
								+/- 1 °C for Thermocouple throughout the range (Software linearized){" "}
							</Text>
							<Text c="#828282" fz={{base:12}} fw={400} mt={20}>
								0 to 100% Rh @ 0 to 50 °C0 to 90% @ 0 to 60 °C0 to 90% @ -10 to 50 °C{" "}
							</Text>
							<Text c="#828282" fz={{base:12}} fw={400} mt={20}>
								+/- 3% @ 25 °C / 50 %Rh{" "}
							</Text>
							<Text c="#828282" fz={{base:12}} fw={400} mt={20}>
								Wall / Surface Mounted
							</Text>
							<Text c="#828282" fz={{base:12}} fw={400} mt={20}>
								20 mm dia. x 75 mm long
							</Text>
							<Text c="#828282" fz={{base:12}} fw={400} mt={20}>
								2 to 5 meter PVC/PVC insulated multi-core cable with pin lugs / SS plastic.{" "}
							</Text>
							<Text c="#828282" fz={{base:12}} fw={400} mt={20}>
								Avoid condensation and drench. Avoid exposure to Saline, Inorganic and Organic Gas.g{" "}
							</Text>
						</Stack>
					</Group>
				</Paper>

				<Group w={1440} ml={144}>
					<Text
						fz={24}
						w={598}
						h={33}
						fw={600}
						mt={200}
						style={{ lineHeight: "51.2px" }}
						c="#292929"
					>
						Input and Output Range
					</Text>
					<Autocomplete
						ml={230}
						placeholder="Search for technical Info"
						leftSection={<IconSearch size="20px" stroke={1.5} color="#555459" />}
						data={[]}
						mt={200}
						radius={32}
						w={{base:308}}
						h={36}
						styles={{
							input: {
								backgroundColor: "#F0F0F0",
								// "::placeholder": {
								// 	c: "#555459",
								// },
								border: "none",
							},
						}}
					/>
				</Group>
				<Group w={1440} mt={29} ml={144}>
					<Table striped withTableBorder w={1152} h={405} verticalSpacing={"sm"}>
						<Table.Thead>
							<Table.Tr>
								<Table.Th fz={{base:14}} c={"#555459"} fw={600}>
									Type
								</Table.Th>
								<Table.Th fz={{base:14}} c={"#555459"} fw={600}>
									Input
								</Table.Th>
								<Table.Th fz={{base:14}} c={"#555459"} fw={600} ta={"end"} pr={32}>
									Range (°C)
								</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A0
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									User selectable K,R,S,B,
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} ta={"end"} pr={45}>
									As below
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A1
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									K type : Cr/Al thermocouple
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									0 to 1372
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A2
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									R type : Pt/PtRh13% thermocouple
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									0 to 1768
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A3
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									S type : Pt/PtRh10% - thermocouple
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									0 to 1768
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A4
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									R type : Pt/PtRh13% thermocouple
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									0 to 1768
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A5
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									R type : Pt/PtRh13% thermocouple
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									0 to 1768
								</Table.Td>
							</Table.Tr>
						</Table.Tbody>
					</Table>
				</Group>

				<Group w={1440}>
					<Text
						fz={24}
						w={598}
						h={33}
						fw={600}
						mt={200}
						ml={152}
						style={{ lineHeight: "51.2px" }}
						c="#292929"
					>
						Ordering Information{" "}
					</Text>
					<Autocomplete
						ml={230}
						placeholder="Search for technical Info"
						leftSection={<IconSearch size="20px" stroke={1.5} color="#555459" />}
						data={[]}
						mt={200}
						radius={32}
						w={{base:308}}
						h={36}
						styles={{
							input: {
								backgroundColor: "#F0F0F0",
								border: "none",
							},
						}}
					/>
					<Table
						striped
						withTableBorder
						w={1152}
						h={405}
						verticalSpacing={"sm"}
						ml={144}
						mt={29}
						withColumnBorders
					>
						<Table.Thead>
							<Table.Tr>
								<Table.Th fz={{base:14}} c={"#555459"} fw={600}>
									Type
								</Table.Th>
								<Table.Th fz={{base:14}} c={"#555459"} fw={600}>
									Specifications
								</Table.Th>
								<Table.Th fz={{base:14}} c={"#555459"} fw={600} ta={"end"} pr={32}>
									Part No.
								</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A0
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} ta={"end"} pr={45}>
									1703-1
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A1
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									1703-1
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A2
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									1703-1
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A3
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									1703-1
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A4
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									1703-1
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A5
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} w={877}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									1703-1
								</Table.Td>
							</Table.Tr>
						</Table.Tbody>
					</Table>
				</Group>
			</Paper>
			<Paper bg={"#f4f4f4"} w={1440} h={1040} visibleFrom="md">
				<Box>
					<Text ta="center" c="#292929" fz={32} fw={600} pt={69}>
						Compare the models
					</Text>
					<Text ta="center" c="#828282" fz={{base:16}} fw={400}>
						Compare with similar items
					</Text>
				</Box>
				<ScrollArea w={1240} h={860} onScrollPositionChange={onScrollPositionChange}>
					<Group wrap="nowrap" ta="center">
						<Card bg={"#FFF"} w={273} h={709} ml={145} mt={64}>
							<Text ta="left" fz={{base:12}} c="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Panel} w={131} h={167} mt={32} ml={70} />
							<Stack ta={"left"}>
								<Text c="#555459" fz={{base:12}} fw={600} mt={32}>
									Key Features
								</Text>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Design
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Input
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Range
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Resolution
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
						<Card bg={"#FFF"} w={273} h={709} ml={20} mt={64}>
							<Text ta="left" fz={{base:12}} c="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Model2} w={167} h={167} mt={32} ml={50} />
							<Stack ta={"left"}>
								<Text c="#555459" fz={{base:12}} fw={600} mt={32}>
									Key Features
								</Text>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Design
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Input
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Range
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Resolution
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
						<Card bg={"#FFF"} w={273} h={709} ml={20} mt={64}>
							<Text ta="left" fz={{base:12}} c="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Panel} w={131} h={167} mt={32} ml={70} />
							<Stack ta={"left"}>
								<Text c="#555459" fz={{base:12}} fw={600} mt={32}>
									Key Features
								</Text>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Design
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Input
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Range
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Resolution
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
						<Card bg={"#FFF"} w={273} h={709} ml={20} mt={64}>
							<Text ta="left" fz={{base:12}} c="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Model2} w={167} h={167} mt={32} ml={50} />
							<Stack ta={"left"}>
								<Text c="#555459" fz={{base:12}} fw={600} mt={32}>
									Key Features
								</Text>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Design
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Input
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Range
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Resolution
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
					</Group>
				</ScrollArea>
			</Paper>
			<Paper w={1440} h={864} visibleFrom="md">
				<Box>
					<Text c="#292929" size="xl" fw={600} ta="center" pt={81}>
						Related Products
					</Text>
				</Box>
				<Group wrap="nowrap" ta="center">
					<Card bg={"#f7f7f7"} h={440} w={273} ml={144} mt={47}>
						<Text ta="left" fz={{base:12}} c="#555459" fw={700}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} w={131} h={166} mt={32} ml={55} />
						<Text ta="center" fz={{base:10}} fw={400} c="#414141" mt={34}>
							₹12,600 – ₹14,700
						</Text>
						<Stack gap="xs" align="stretch" py={15}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
					<Card bg={"#f7f7f7"} h={440} w={273} ml={20} mt={47}>
						<Text ta="left" fz={{base:12}} c="#555459" fw={700}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} w={131} h={166} mt={32} ml={55} />
						<Text ta="center" fz={{base:10}} fw={400} c="#414141" mt={34}>
							₹12,600 – ₹14,700
						</Text>
						<Stack gap="xs" align="stretch" py={15}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
					<Card bg={"#f7f7f7"} h={440} w={273} ml={20} mt={47}>
						<Text ta="left" fz={{base:12}} c="#555459" fw={700}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} w={131} h={166} mt={32} ml={55} />
						<Text ta="center" fz={{base:10}} fw={400} c="#414141" mt={34}>
							₹12,600 – ₹14,700
						</Text>
						<Stack gap="xs" align="stretch" py={15}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
					<Card bg={"#f7f7f7"} h={440} w={273} ml={20} mt={47}>
						<Text ta="left" fz={{base:12}} c="#555459" fw={700}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} w={131} h={166} mt={32} ml={55} />
						<Text ta="center" fz={{base:10}} fw={400} c="#414141" mt={34}>
							₹12,600 – ₹14,700
						</Text>
						<Stack gap="xs" align="stretch" py={15}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
				</Group>
			</Paper> */}

			{/**MOBILE VIEW */}
			{/* <Paper w={{base:360}} h={3986} hiddenFrom="xs">
				<Grid>
					<Grid.Col span={{base:12}}>
						<Image src={RectangleGreyLeft} h={{base:401}} w={{base:360}} pos="absolute" />
						<Image src={Panel} alt="Vision" w={{base:181}} h={{base:231}} pos={"absolute"} ml={89} mt={40} />

						<Image src={PanelBg} alt="Vision" w={{base:64}} h={{base:63}} pos={"absolute"} left={75} mt={307} />
						<Image src={PanelFront} w={{base:60}} h={60} pos={"absolute"} left={75} mt={307} />

						<Image src={PanelBg} alt="Vision" w={{base:64}} h={{base:63}} pos={"absolute"} left={148} mt={307} />
						<Image src={Panel2} alt="Vision"w={{base:53}} h={60} pos={"absolute"} left={148} mt={307} />

						<Image src={PanelBg} alt="Vision" w={{base:64}} h={{base:63}} pos={"absolute"} left={224} mt={307} />
						<Image src={PanelFront} w={{base:62}} h={60} pos={"absolute"} left={224} mt={307} />
					</Grid.Col>
					<Grid.Col span={{base:12}} mt={{base:425}}>
						<Text fz={{base:16}} w={{base:328}} fw={600} ml={{base:16}} c="#292929">
							Three Phase Thyristor Power Controller – POW-3-PA{" "}
						</Text>
						<Text c="#777" fz={{base:10}} fw={400} ml={{base:16}} mt={{base:4}}>
							Digital Indicator : Category
						</Text>
						<Text c="#262728" fz={20} fw={600} ml={{base:16}} mt={{base:16}}>
							₹ 3,000-₹ 4000
						</Text>
						<Text c="#FF6951" fz={{base:10}} fw={400} ml={{base:16}} mt={{base:4}}>
							Prices are inclusive of Delivery Charges.
						</Text>
						<Text c="#555459" fz={{base:12}} fw={300} ml={{base:16}} mt={{base:24}}>
							Configuration: (1 AI + 1 AO )<br /> Size: 96 x 96 x 75
							<br /> Part No: 1304
						</Text>
						<Group ml={{base:16}} mt={{base:24}} w={500}>
							<Text c="#555459" fz={{base:12}}>
								Quantity
							</Text>
							<Group gap={0}>
								<ActionIcon
									size={28}
									w={{base:29}}
									variant="default"
									style={{ borderRadius: 0 }}
									onClick={() => handlers.current?.decrement}
								>
									–
								</ActionIcon>
								<NumberInput
									hideControls
									value={value}
									onChange={(val) => setValue(value)}
									handlersRef={handlers}
									max={10}
									min={0}
									step={1}
									size="28px"
									styles={{
										input: { width: rem(54), textAlign: "center", borderRadius: 0, fontSize: 12 },
									}}
								/>
								<ActionIcon
									size={28}
									variant="default"
									style={{ borderRadius: 0 }}
									onClick={() => handlers.current?.increment()}
								>
									+
								</ActionIcon>
							</Group>
						</Group>

						<Stack ml={{base:16}} mt={{base:24}} w={{base:328}}>
							<Select
								label="Select Part Number"
								placeholder="Choose an option"
								data={[
									{ value: "react", label: "React" },
									{ value: "ng", label: "Angular" },
									{ value: "svelte", label: "Svelte" },
									{ value: "vue", label: "Vue" },
								]}
							></Select>
							<Select
								label="Select Relay Card"
								placeholder="Choose an option"
								data={[
									{ value: "react", label: "React" },
									{ value: "ng", label: "Angular" },
									{ value: "svelte", label: "Svelte" },
									{ value: "vue", label: "Vue" },
								]}
							></Select>
						</Stack>
						<Group mt={{base:24}} ml={{base:16}}>
							<PrimaryButton w={157}>Add to Cart</PrimaryButton>
							<OptionsButton w={155}>Buy Now</OptionsButton>
						</Group>

						<Text fw={600} fz={{base:14}} c="#262728" ml={{base:16}} w={{base:308}} mt={{base:33}}>
							{" "}
							Key Features
							<List mt={{base:19}}>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Accepts thermocouple, RTD(Pt-100), Infrared pyrometer.
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Both switching and linear PID control outputs.
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Servo start from the process temperature.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									User programmable 1-10 different patterns of ramp/soak steps.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Retention and auto-execution of program in case of power failure.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Facility to use as PID and ON / OFF controller.{" "}
								</List.Item>
							</List>
						</Text>
						<Text fw={600} fz={{base:14}} c="#262728" ml={{base:16}} w={{base:308}} mt={{base:33}}>
							{" "}
							Applications{" "}
							<List mt={{base:19}}>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Accepts thermocouple, RTD(Pt-100), Infrared pyrometer.
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Both switching and linear PID control outputs.
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Servo start from the process temperature.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									User programmable 1-10 different patterns of ramp/soak steps.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Retention and auto-execution of program in case of power failure.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Facility to use as PID and ON / OFF controller.{" "}
								</List.Item>
							</List>
						</Text>
					</Grid.Col>
				</Grid>
				<Paper w={{base:360}} withBorder mt={{base:50}}>
					<Tabs c={"#555459"} ml={{base:16}} defaultValue={"desc"}>
						<Tabs.List h={{base:63}}>
							<Tabs.Tab value="desc">
								<Text fz={{base:12}} w={{base:65}} c={"#292929"}>
									Description
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="spec">
								<Text fz={{base:12}} w={{base:71}} c={"#292929"}>
									Specification
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="i/o">
								<Text fz={{base:12}} w={{base:71}} c={"#292929"}>
									Input and output range
								</Text>
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
				</Paper>

				<Grid>
					<Grid.Col span={{base:12}}>
						<Image src={InnerYellowBg} bg={"white"} w={{base:258}} h={{base:289}} pos={"absolute"} ml={102} />

						<Image src={Category} alt="Sample" w={{base:328}} h={241} pos={"absolute"} mt={{base:24}} ml={{base:16}} />
					</Grid.Col>
					<Grid.Col span={{base:12}}>
						<Text fz={{base:16}} w={{base:328}} fw={600} ml={{base:16}} mt={313} c={"#292929"}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>

						<Text
							w={{base:328}}
							style={{ color: "#555459" }}
							fz={{base:12}}
							fw={400}
							mt={{base:12}}
							ml={{base:16}}
							lineClamp={5}
						>
							Libratherm offers Microcontroller based multiple Ramp/Soak Programmable PID
							Temperature Controller Model PRC-967 which is designed to improve reliability,
							accuracy, and control for all processing applications. It features Ramp and Soak
							functions (the capability to control the temperature and its rate of change over a
							predetermined time span).
							<br />
							<br />
							This PID Programme Controller PRC-967 offers a single profile of 16 steps that can be
							programmed into the memory with the user-friendly membrane keyboard. Separate displays
							are provided to monitor simultaneously; the Process temperature, Set temperature, and
							the Program number. They can also be used as single set point control when the profile
							control is not desired. They accept user-selectable standard temperature sensors like
							K, R, S, and B type thermocouples
							<br />
							<br />
							The Profile Controller offers both switching outputs in the form of SSR driver or
							Triac to drive external single or three-phase Solid-state relays or load contactors
							and linear analog control outputs in the form of (4-20)mA or (0-5)volt or (0-10)VDC,
							which can be used to control heater power through Thyristor Power Regulators (for an
							electrical heating system) or to control the position of a modulating motor valve (for
							oil or gas-fired heating systems). The analog outputs can be directly connected to
							Libratherm make single-phase/three-phase SCR based phase angle fired power
							controllers, which are ideally suitable for both resistive and inductive heating load.
						</Text>
						<UnstyledButton ml={{base:16}} mt={{base:16}} c={"#555459"}>
							<Text fz={{base:12}}>Read More</Text>
						</UnstyledButton>
					</Grid.Col>
				</Grid>

				<Paper w={{base:360}} bg={"#f1f1f1"} h={{base:716}} mt={{base:36}}>
					<Text ta="center" c="#292929" fz={{base:16}} fw={600} pt={36}>
						Compare the models
					</Text>

					<ScrollArea w={{base:360}} h={{base:620}} onScrollPositionChange={onScrollPositionChange}>
						<Group wrap="nowrap">
							<Card bg={"#FFF"} w={156} h={{base:553}} ml={{base:16}} mt={20} radius={10}>
								<Text w={132} fz={{base:12}} c="#555459" fw={600}>
									Temperature Indicator – DPI-902
								</Text>

								<Image src={Panel} w={73} h={{base:93}} mt={{base:16}} ml={20} />
								<Stack gap={8}>
									<Text c="#555459" fz={{base:12}} fw={600} mt={22}>
										Key Features
									</Text>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Design
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Input
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Range
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Resolution
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
								</Stack>
							</Card>
							<Card bg={"#FFF"} w={156} h={{base:553}} ml={{base:16}} mt={20} radius={10}>
								<Text w={132} fz={{base:12}} c="#555459" fw={600}>
									Temperature Indicator – DPI-902
								</Text>

								<Image src={Panel} w={73} h={{base:93}} mt={{base:16}} ml={20} />
								<Stack gap={8}>
									<Text c="#555459" fz={{base:12}} fw={600} mt={22}>
										Key Features
									</Text>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Design
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Input
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Range
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Resolution
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
								</Stack>
							</Card>
							<Card bg={"#FFF"} w={156} h={{base:553}} ml={{base:16}} mt={20} radius={10}>
								<Text w={132} fz={{base:12}} c="#555459" fw={600}>
									Temperature Indicator – DPI-902
								</Text>

								<Image src={Panel} w={73} h={{base:93}} mt={{base:16}} ml={20} />
								<Stack gap={8}>
									<Text c="#555459" fz={{base:12}} fw={600} mt={22}>
										Key Features
									</Text>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Design
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Input
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Range
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Resolution
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
								</Stack>
							</Card>
							<Card bg={"#FFF"} w={156} h={{base:553}} ml={{base:16}} mt={20} radius={10}>
								<Text w={132} fz={{base:12}} c="#555459" fw={600}>
									Temperature Indicator – DPI-902
								</Text>

								<Image src={Panel} w={73} h={{base:93}} mt={{base:16}} ml={20} />
								<Stack gap={8}>
									<Text c="#555459" fz={{base:12}} fw={600} mt={22}>
										Key Features
									</Text>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Design
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Input
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Range
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{base:12}} fw={600}>
										Resolution
									</Text>
									<Text c="#828282" fz={{base:10}} fw={400} w={{base:140}}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
								</Stack>
							</Card>
						</Group>
					</ScrollArea>
				</Paper>

				<Paper w={{base:360}} h={864} hiddenFrom="xs">
					<Text c="#292929" size="xl" fw={600} ta="center" pt={81}>
						Recently Viewed
					</Text>
					<Group wrap="nowrap" ta="center">
						<Card withBorder h={440} w={273} ml={46} mt={32}>
							<Text ta="left" fz={{base:14}} c="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Image src={Panel} w={131} h={166} mt={32} ml={55} />
							<Text ta="center" fz={20} fw={400} c="#414141" mt={34}>
								₹12,600 – ₹14,700
							</Text>
							<Stack gap="xs" align="stretch" py={15}>
								<OptionsButton>Select Options</OptionsButton>
								<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
							</Stack>
						</Card>
					</Group>
				</Paper>

				<Paper w={{base:360}} withBorder mt={{base:50}}>
					<Tabs c={"#555459"} ml={{base:16}} defaultValue={"spec"}>
						<Tabs.List h={{base:63}}>
							<Tabs.Tab value="desc">
								<Text fz={{base:12}} w={{base:65}} c={"#292929"}>
									Description
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="spec">
								<Text fz={{base:12}} w={{base:71}} c={"#292929"}>
									Specification
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="i/o">
								<Text fz={{base:12}} w={{base:71}} c={"#292929"}>
									Input and output range
								</Text>
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
				</Paper>

				<Table w={{base:360}} withRowBorders={false}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th fz={{base:12}} c={"#555459"} fw={600} w={139}>
								Paramenters
							</Table.Th>
							<Table.Th fz={{base:12}} c={"#555459"} fw={600}>
								Description{" "}
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Item
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								(T + RH) Sensor (OEM version)
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Model
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								HS – 440 (Only For Humidity)
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Input Sensor
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								For Temp.: Class A RTD Pt-100 element (Hayashi Denko – Japan)For %Rh: Honeywell make
								Humidity sensor HIH-4000
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Sensor Output
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								For Temperature Pt-100: 84.27 Ohms to 123.24 Ohms (-40 to 60 °C) (Alpha =
								0.00385)For %Rh: 0.0Volt @ 0% Rh and 3.33Vdc @ 100%Rh or0 to 1Vdc Linear
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Sensor Supply
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								+/- 1 °C for Thermocouple throughout the range (Software linearized)
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Humidity Range
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								0 to 100% Rh @ 0 to 50 °C0 to 90% @ 0 to 60 °C0 to 90% @ -10 to 50 °C
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Humidity Accuracy
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								+/- 3% @ 25 °C / 50 %Rh
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Type
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								+/- 3% @ 25 °C / 50 %Rh
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Size
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								20 mm dia. x 75 mm long
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Cable / Enclosure
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								2 to 5 meter PVC/PVC insulated multi-core cable with pin lugs / SS plastic.
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Precautions for use
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								Avoid condensation and drench. Avoid exposure to Saline, Inorganic and Organic Gas.g
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>

				<Paper w={{base:360}} withBorder mt={{base:50}}>
					<Tabs c={"#555459"} ml={{base:16}} defaultValue={"i/o"}>
						<Tabs.List h={{base:63}}>
							<Tabs.Tab value="desc">
								<Text fz={{base:12}} w={{base:65}} c={"#292929"}>
									Description
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="spec">
								<Text fz={{base:12}} w={{base:71}} c={"#292929"}>
									Specification
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="i/o">
								<Text fz={{base:12}} w={{base:71}} c={"#292929"}>
									Input and output range
								</Text>
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
				</Paper>
				<Autocomplete
					ml={{base:16}}
					placeholder="Search for order Info"
					leftSection={<IconSearch size="20px" stroke={1.5} color="#555459" />}
					data={[]}
					mt={{base:12}}
					radius={32}
					w={{base:328}}
					h={36}
					styles={{
						input: {
							backgroundColor: "#F0F0F0",
							border: "none",
						},
					}}
				/>
				<Table ml={{base:16}} mt={{base:12}} w={{base:328}}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{base:12}}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{base:12}}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Specifications
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
								and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
								°C).
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Part No.
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{base:16}} mt={{base:12}} w={{base:328}} bg={"#f7f7f7"}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{base:12}}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{base:12}}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Specifications
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
								and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
								°C).
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Part No.
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{base:16}} mt={{base:12}} w={{base:328}}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{base:12}}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{base:12}}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Specifications
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
								and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
								°C).
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Part No.
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{base:16}} mt={{base:12}} w={{base:328}} bg={"#f7f7f7"}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{base:12}}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{base:12}}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Specifications
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
								and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
								°C).
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Part No.
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>

				<Paper w={{base:360}} withBorder mt={{base:50}}>
					<Tabs c={"#555459"} ml={{base:16}} defaultValue={"i/o"}>
						<Tabs.List h={{base:63}}>
							<Tabs.Tab value="desc">
								<Text fz={{base:12}} w={{base:65}} c={"#292929"}>
									Description
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="spec">
								<Text fz={{base:12}} w={{base:71}} c={"#292929"}>
									Specification
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="i/o">
								<Text fz={{base:12}} w={{base:71}} c={"#292929"}>
									Input and output range
								</Text>
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
				</Paper>
				<Autocomplete
					ml={{base:16}}
					placeholder="Search for input and output"
					leftSection={<IconSearch size="20px" stroke={1.5} color="#555459" />}
					data={[]}
					mt={{base:12}}
					radius={32}
					w={{base:328}}
					h={36}
					styles={{
						input: {
							backgroundColor: "#F0F0F0",
							border: "none",
						},
					}}
				/>
				<Table ml={{base:16}} mt={{base:12}} w={{base:328}}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{base:12}}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{base:12}}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Input
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Range (°C)
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{base:16}} mt={{base:12}} w={{base:328}} bg={"#f7f7f7"}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{base:12}}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{base:12}}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Input
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Range (°C)
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{base:16}} mt={{base:12}} w={{base:328}}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{base:12}}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{base:12}}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Input
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Range (°C)
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{base:16}} mt={{base:12}} w={{base:328}} bg={"#f7f7f7"}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{base:12}}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{base:12}}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Input
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Range (°C)
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{base:16}} mt={{base:12}} w={{base:328}}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{base:12}}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{base:12}}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Input
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Range (°C)
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
				<Table ml={{base:16}} mt={{base:12}} w={{base:328}} bg={"#f7f7f7"}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{base:12}}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{base:12}}>
								A0
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Input
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
								Range (°C)
							</Table.Td>
							<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
			</Paper> */}

			{/**Tablet */}
			{/* <Paper w={768} h={4600} mt={30} visibleFrom="xs" hiddenFrom="md">
				<Grid>
					<Grid.Col span={{base:12}}>
						<Image
							src={RectangleGreyLeft}
							alt="Vision"
							h={639}
							w={768}
							pos="absolute"
							pl={0}
							left={0}
						/>
						<Image
							src={Panel}
							alt="Vision"
							w={256.221}
							h={327}
							pos={"absolute"}
							left={256}
							mt={114}
						/>
						<Image src={PanelBg} alt="Vision" w={{base:62}} h={60} pos={"absolute"} left={282} mt={473} />
						<Image
							src={PanelFront}
							alt="Vision"
							w={{base:62}}
							h={60}
							pos={"absolute"}
							left={282}
							mt={473}
						/>

						<Image src={PanelBg} alt="Vision"w={{base:53}} h={60} pos={"absolute"} left={362} mt={473} />
						<Image src={Panel2} alt="Vision"w={{base:53}} h={60} pos={"absolute"} left={362} mt={473} />
						<Image src={PanelBg} alt="Vision" w={{base:62}} h={60} pos={"absolute"} left={432} mt={473} />
						<Image
							src={PanelFront}
							alt="Vision"
							w={{base:62}}
							h={60}
							pos={"absolute"}
							left={432}
							mt={473}
						/>
					</Grid.Col>
					<Grid.Col span={{base:12}} mt={639}>
						<Text fz={24} fw={600} ml={98} mt={44} c="#292929">
							Three Phase Thyristor Power Controller – POW-3-PA{" "}
						</Text>
						<Text c="#777" fz={{base:12}} fw={400} ml={98} mt={{base:4}}>
							Digital Indicator : Category
						</Text>
						<Text c="#262728" fz={20} fw={600} ml={98} mt={{base:24}}>
							₹ 4000
						</Text>
						<Text c="#FF6951" fz={{base:12}} fw={400} ml={98} mt={{base:4}}>
							Prices are inclusive of Delivery Charges.
						</Text>
						<Divider my={24} ml={98} w={558} h={0.5}></Divider>
						<Text c="#555459" fz={{base:12}} fw={300} ml={98} mt={{base:24}}>
							Configuration: (1 AI + 1 AO )<br /> Size: 96 x 96 x 75
							<br /> Part No: 1304
						</Text>
						<Group ml={98} mt={{base:24}} w={550}>
							<Select
								label="Select Part Number"
								placeholder="Choose an option"
								data={[
									{ value: "react", label: "React" },
									{ value: "ng", label: "Angular" },
									{ value: "svelte", label: "Svelte" },
									{ value: "vue", label: "Vue" },
								]}
							></Select>
							<Select
								ml={24}
								label="Select Relay Card"
								placeholder="CPC"
								data={[
									{ value: "react", label: "React" },
									{ value: "ng", label: "Angular" },
									{ value: "svelte", label: "Svelte" },
									{ value: "vue", label: "Vue" },
								]}
							></Select>
						</Group>
						<Group ml={98} mt={{base:24}} w={500}>
							<Text c="#555459" fz={{base:12}}>
								Quantity
							</Text>
							<ActionIcon size={42} variant="default">
								–
							</ActionIcon>
							<NumberInput
								hideControls
								value={value}
								// onChange={(val) => setValue(val)}
								handlersRef={handlers}
								max={10}
								min={0}
								step={1}
								styles={{ input: { width: rem(20), textAlign: "center" } }}
							/>
							<ActionIcon size={42} variant="default">
								+
							</ActionIcon>
							<PrimaryButton>Add to Cart</PrimaryButton>
							<OptionsButton>Buy Now</OptionsButton>
						</Group>
						<Text fw={400} size={"16px"} c="#262728" ml={98} w={500} mt={{base:33}}>
							{" "}
							Key Features
							<List mt={{base:16}}>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Accepts thermocouple, RTD(Pt-100), Infrared pyrometer.
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Both switching and linear PID control outputs.
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Servo start from the process temperature.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									User programmable 1-10 different patterns of ramp/soak steps.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Retention and auto-execution of program in case of power failure.{" "}
								</List.Item>
								<List.Item
									style={{
										fontSize: "12px",
										fontWeight: "400",
										color: "#555459",
									}}
								>
									Facility to use as PID and ON / OFF controller.{" "}
								</List.Item>
							</List>
						</Text>
					</Grid.Col>
				</Grid>
				<Paper w={768} h={{base:63}} withBorder mt={15}>
					<Group wrap="nowrap" ml={55} gap={72} pt={22}>
						<UnstyledButton>
							<Text fz={{base:12}} c="#292929" fw={400}>
								Description
							</Text>
						</UnstyledButton>
						<UnstyledButton>
							{" "}
							<Text fz={{base:12}} c="#292929" fw={400}>
								Specifications
							</Text>{" "}
						</UnstyledButton>
						<UnstyledButton>
							{" "}
							<Text fz={{base:12}} c="#292929" fw={400}>
								Input and Output Range
							</Text>
						</UnstyledButton>
						<UnstyledButton>
							{" "}
							<Text fz={{base:12}} c="#292929" fw={400}>
								Ordering Information
							</Text>
						</UnstyledButton>
					</Group>
				</Paper>

				<Grid>
					<Grid.Col span={{base:12}}>
						<Image src={InnerYellowBg} bg={"white"} w={475} h={554} pos={"absolute"} ml={293} />

						<Image src={Category} alt="Sample" w={588} h={433} pos={"absolute"} mt={61} ml={90} />
					</Grid.Col>
					<Grid.Col span={{base:12}} mt={463}>
						<Text
							fz={32}
							fw={600}
							ml={90}
							mt={105}
							style={{ lineHeight: "51.2px", color: "#292929" }}
						>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>

						<Text
							h={331}
							w={664}
							style={{ color: "#555459" }}
							fz={{base:14}}
							fw={400}
							mb={40}
							mt={32}
							ml={90}
						>
							Libratherm offers Microcontroller based multiple Ramp/Soak Programmable PID
							Temperature Controller Model PRC-967 which is designed to improve reliability,
							accuracy, and control for all processing applications. It features Ramp and Soak
							functions (the capability to control the temperature and its rate of change over a
							predetermined time span).
							<br />
							<br />
							This PID Programme Controller PRC-967 offers a single profile of 16 steps that can be
							programmed into the memory with the user-friendly membrane keyboard. Separate displays
							are provided to monitor simultaneously; the Process temperature, Set temperature, and
							the Program number. They can also be used as single set point control when the profile
							control is not desired. They accept user-selectable standard temperature sensors like
							K, R, S, and B type thermocouples
							<br />
							<br />
							The Profile Controller offers both switching outputs in the form of SSR driver or
							Triac to drive external single or three-phase Solid-state relays or load contactors
							and linear analog control outputs in the form of (4-20)mA or (0-5)volt or (0-10)VDC,
							which can be used to control heater power through Thyristor Power Regulators (for an
							electrical heating system) or to control the position of a modulating motor valve (for
							oil or gas-fired heating systems). The analog outputs can be directly connected to
							Libratherm make single-phase/three-phase SCR based phase angle fired power
							controllers, which are ideally suitable for both resistive and inductive heating load.
						</Text>
					</Grid.Col>
				</Grid>

				<Paper mt={144} ml={90} w={768}>
					<Text fz={24} w={768} h={33} fw={600} c="#292929">
						Specifications
					</Text>
					<Table w={588} withRowBorders={false} mt={30}>
						<Table.Thead>
							<Table.Tr>
								<Table.Th fz={{base:12}} c={"#555459"} fw={600} w={139}>
									Paramenters
								</Table.Th>
								<Table.Th fz={{base:12}} c={"#555459"} fw={600}>
									Description{" "}
								</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									Item
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									(T + RH) Sensor (OEM version)
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									Model
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									HS – 440 (Only For Humidity)
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									Input Sensor
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									For Temp.: Class A RTD Pt-100 element (Hayashi Denko – Japan)For %Rh: Honeywell
									make Humidity sensor HIH-4000
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									Sensor Output
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									For Temperature Pt-100: 84.27 Ohms to 123.24 Ohms (-40 to 60 °C) (Alpha =
									0.00385)For %Rh: 0.0Volt @ 0% Rh and 3.33Vdc @ 100%Rh or0 to 1Vdc Linear
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									Sensor Supply
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									+/- 1 °C for Thermocouple throughout the range (Software linearized)
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									Humidity Range
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									0 to 100% Rh @ 0 to 50 °C0 to 90% @ 0 to 60 °C0 to 90% @ -10 to 50 °C
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									Humidity Accuracy
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									+/- 3% @ 25 °C / 50 %Rh
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									Type
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									+/- 3% @ 25 °C / 50 %Rh
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									Size
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									20 mm dia. x 75 mm long
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									Cable / Enclosure
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									2 to 5 meter PVC/PVC insulated multi-core cable with pin lugs / SS plastic.
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									Precautions for use
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									Avoid condensation and drench. Avoid exposure to Saline, Inorganic and Organic
									Gas.g
								</Table.Td>
							</Table.Tr>
						</Table.Tbody>
					</Table>
					<Group mt={102} justify="space-between">
						<Text fz={24} h={33} fw={600} c="#292929">
							Input and Output Range
						</Text>
						<Autocomplete
							placeholder="Search for technical Info"
							leftSection={<IconSearch size="10px" stroke={1.5} color="#555459" />}
							data={[]}
							radius={32}
							w={202}
							h={36}
							mr={180}
							styles={{
								input: {
									backgroundColor: "#F0F0F0",
									fontSize: 10,
									border: "none",
								},
							}}
						/>
					</Group>
					<Table striped withTableBorder w={588} mt={32} h={405} verticalSpacing={"sm"}>
						<Table.Thead>
							<Table.Tr>
								<Table.Th fz={{base:14}} c={"#555459"} fw={600}>
									Type
								</Table.Th>
								<Table.Th fz={{base:14}} c={"#555459"} fw={600}>
									Input
								</Table.Th>
								<Table.Th fz={{base:14}} c={"#555459"} fw={600} ta={"end"} pr={32}>
									Range (°C)
								</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A0
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									User selectable K,R,S,B,
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} ta={"end"} pr={45}>
									As below
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A1
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									K type : Cr/Al thermocouple
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									0 to 1372
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A2
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									R type : Pt/PtRh13% thermocouple
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									0 to 1768
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A3
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									S type : Pt/PtRh10% - thermocouple
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									0 to 1768
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A4
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									R type : Pt/PtRh13% thermocouple
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									0 to 1768
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A5
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									R type : Pt/PtRh13% thermocouple
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									0 to 1768
								</Table.Td>
							</Table.Tr>
						</Table.Tbody>
					</Table>

					<Group mt={102} justify="space-between">
						<Text fz={24} h={33} fw={600} c="#292929">
							Ordering Information
						</Text>
						<Autocomplete
							placeholder="Search for technical Info"
							leftSection={<IconSearch size="10px" stroke={1.5} color="#555459" />}
							data={[]}
							radius={32}
							w={202}
							h={36}
							mr={180}
							styles={{
								input: {
									backgroundColor: "#F0F0F0",
									fontSize: 10,
									border: "none",
								},
							}}
						/>
					</Group>
					<Table
						striped
						withTableBorder
						w={588}
						h={405}
						verticalSpacing={"sm"}
						mt={29}
						withColumnBorders
					>
						<Table.Thead>
							<Table.Tr>
								<Table.Th fz={{base:14}} c={"#555459"} fw={600}>
									Type
								</Table.Th>
								<Table.Th fz={{base:14}} c={"#555459"} fw={600}>
									Specifications
								</Table.Th>
								<Table.Th fz={{base:14}} c={"#555459"} fw={600} ta={"end"} pr={32}>
									Part No.
								</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A0
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} ta={"end"} pr={45}>
									1703-1
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A1
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									1703-1
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A2
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									1703-1
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A3
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									1703-1
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A4
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									1703-1
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={{base:12}} c={"#555459"} fw={600}>
									A5
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} w={877}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={{base:12}} fw={400} c={"#828282"} pr={45} ta={"end"}>
									1703-1
								</Table.Td>
							</Table.Tr>
						</Table.Tbody>
					</Table>
				</Paper>
			</Paper>
			<Paper bg={"#f4f4f4"} w={768} h={1040} visibleFrom="xs" hiddenFrom="md">
				<Box>
					<Text ta="center" c="#292929" fz={32} fw={600} pt={69}>
						Compare the models
					</Text>
					<Text ta="center" c="#828282" fz={{base:16}} fw={400}>
						Compare with similar items
					</Text>
				</Box>
				<ScrollArea w={768} h={860} onScrollPositionChange={onScrollPositionChange}>
					<Group wrap="nowrap" ta="center">
						<Card bg={"#FFF"} w={273} h={709} ml={90} mt={64}>
							<Text ta="left" fz={{base:12}} c="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Panel} w={131} h={167} mt={32} ml={70} />
							<Stack ta={"left"}>
								<Text c="#555459" fz={{base:12}} fw={600} mt={32}>
									Key Features
								</Text>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Design
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Input
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Range
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Resolution
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
						<Card bg={"#FFF"} w={273} h={709} ml={20} mt={64}>
							<Text ta="left" fz={{base:12}} c="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Model2} w={167} h={167} mt={32} ml={50} />
							<Stack ta={"left"}>
								<Text c="#555459" fz={{base:12}} fw={600} mt={32}>
									Key Features
								</Text>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Design
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Input
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Range
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Resolution
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
						<Card bg={"#FFF"} w={273} h={709} ml={20} mt={64}>
							<Text ta="left" fz={{base:12}} c="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Panel} w={131} h={167} mt={32} ml={70} />
							<Stack ta={"left"}>
								<Text c="#555459" fz={{base:12}} fw={600} mt={32}>
									Key Features
								</Text>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Design
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Input
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Range
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Resolution
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
						<Card bg={"#FFF"} w={273} h={709} ml={20} mt={64}>
							<Text ta="left" fz={{base:12}} c="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Model2} w={167} h={167} mt={32} ml={50} />
							<Stack ta={"left"}>
								<Text c="#555459" fz={{base:12}} fw={600} mt={32}>
									Key Features
								</Text>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Design
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Input
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Range
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={{base:12}} fw={600}>
									Resolution
								</Text>
								<Text c="#828282" fz={{base:12}} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
					</Group>
				</ScrollArea>
			</Paper>
			<Paper w={768} h={1164} visibleFrom="xs" hiddenFrom="md">
				<Text c="#292929" size="xl" fw={600} ta="center" pt={81}>
					Related Products
				</Text>
				<Grid w={592} mt={{base:24}} hiddenFrom="md" visibleFrom="xs" ml={90}>
					<Grid.Col span={6}>
						<Card withBorder bg={"#f7f7f7"} h={460} w={273}>
							<Card.Section>
								<Text fz={{base:14}} fw={600} c={"#555459"} w={261} mt={{base:24}} ml={{base:16}}>
									Three Phase Thyristor Power Controller – POW-3-PAA
								</Text>
								<Image src={Panel} w={137} h={173} ml={75} mt={35} />
							</Card.Section>

							<Text c={"#414141"} fz={20} mt={30} ta={"center"}>
								₹12,600 – ₹14,700
							</Text>
							<Stack gap="xs" align="stretch" py={15}>
								<OptionsButton tt={"uppercase"}>Select Options</OptionsButton>
								<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
							</Stack>
						</Card>
					</Grid.Col>
					<Grid.Col span={6}>
						<Card withBorder bg={"#f7f7f7"} h={460} w={273}>
							<Card.Section>
								<Text fz={{base:14}} fw={600} c={"#555459"} w={261} mt={{base:24}} ml={{base:16}}>
									Three Phase Thyristor Power Controller – POW-3-PAA
								</Text>
								<Image src={Panel} w={137} h={173} ml={75} mt={35} />
							</Card.Section>

							<Text c={"#414141"} fz={20} mt={30} ta={"center"}>
								₹12,600 – ₹14,700
							</Text>
							<Stack gap="xs" align="stretch" py={15}>
								<OptionsButton tt={"uppercase"}>Select Options</OptionsButton>
								<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
							</Stack>
						</Card>
					</Grid.Col>
					<Grid.Col span={6}>
						<Card withBorder bg={"#f7f7f7"} h={460} w={273}>
							<Card.Section>
								<Text fz={{base:14}} fw={600} c={"#555459"} w={261} mt={{base:24}} ml={{base:16}}>
									Three Phase Thyristor Power Controller – POW-3-PAA
								</Text>
								<Image src={Panel} w={137} h={173} ml={75} mt={35} />
							</Card.Section>

							<Text c={"#414141"} fz={20} mt={30} ta={"center"}>
								₹12,600 – ₹14,700
							</Text>
							<Stack gap="xs" align="stretch" py={15}>
								<OptionsButton tt={"uppercase"}>Select Options</OptionsButton>
								<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
							</Stack>
						</Card>
					</Grid.Col>
					<Grid.Col span={6}>
						<Card withBorder bg={"#f7f7f7"} h={460} w={273}>
							<Card.Section>
								<Text fz={{base:14}} fw={600} c={"#555459"} w={261} mt={{base:24}} ml={{base:16}}>
									Three Phase Thyristor Power Controller – POW-3-PAA
								</Text>
								<Image src={Panel} w={137} h={173} ml={75} mt={35} />
							</Card.Section>

							<Text c={"#414141"} fz={20} mt={30} ta={"center"}>
								₹12,600 – ₹14,700
							</Text>
							<Stack gap="xs" align="stretch" py={15}>
								<OptionsButton tt={"uppercase"}>Select Options</OptionsButton>
								<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
							</Stack>
						</Card>
					</Grid.Col>
				</Grid>
			</Paper> */}
		</>
	);
};

export default InnerProduct;

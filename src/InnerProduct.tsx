import {
	Paper,
	Container,
	Grid,
	// Col,
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
			<Paper w={1440} h={3686} mt={30} visibleFrom="xs">
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
						<Image src={PanelBg} alt="Vision" w={62} h={60} pos={"absolute"} left={253} mt={473} />
						<Image
							src={PanelFront}
							alt="Vision"
							w={62}
							h={60}
							pos={"absolute"}
							left={253}
							mt={473}
						/>

						<Image src={PanelBg} alt="Vision" w={53} h={60} pos={"absolute"} left={333} mt={473} />
						<Image src={Panel2} alt="Vision" w={53} h={60} pos={"absolute"} left={333} mt={473} />
						<Image src={PanelBg} alt="Vision" w={62} h={60} pos={"absolute"} left={403} mt={473} />
						<Image
							src={PanelFront}
							alt="Vision"
							w={62}
							h={60}
							pos={"absolute"}
							left={403}
							mt={473}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Text size="24px" w={468} fw={600} ml={98} mt={44} c="#292929">
							Three Phase Thyristor Power Controller – POW-3-PA{" "}
						</Text>
						<Text c="#777" size="md" fw={400} ml={98} mt={4}>
							Digital Indicator : Category
						</Text>
						<Text c="#262728" size="lg" fw={600} ml={98} mt={24}>
							₹ 4000
						</Text>
						<Text c="#FF6951" size="xs" fw={400} ml={98} mt={4}>
							Prices are inclusive of Delivery Charges.
						</Text>
						<Divider my={24} ml={98} w={558} h={0.5}></Divider>
						<Text c="#555459" fz={12} fw={300} ml={98} mt={24}>
							Configuration: (1 AI + 1 AO )<br /> Size: 96 x 96 x 75
							<br /> Part No: 1304
						</Text>
						<Group ml={98} mt={24} w={550}>
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
						<Group ml={98} mt={24} w={500}>
							<Text c="#555459" fz={12}>
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
						<Text fw={400} size={"16px"} c="#262728" ml={98} w={500} mt={33}>
							{" "}
							Key Features
							<List mt={16}>
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
				<Paper w={1440} h={63} withBorder mt={15}>
					<Group wrap="nowrap" ml={55} gap={72} pt={22}>
						<UnstyledButton>
							<Text fz={12} c="#292929" fw={400}>
								Description
							</Text>
						</UnstyledButton>
						<UnstyledButton>
							{" "}
							<Text fz={12} c="#292929" fw={400}>
								Specifications
							</Text>{" "}
						</UnstyledButton>
						<UnstyledButton>
							{" "}
							<Text fz={12} c="#292929" fw={400}>
								Input and Output Range
							</Text>
						</UnstyledButton>
						<UnstyledButton>
							{" "}
							<Text fz={12} c="#292929" fw={400}>
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
							fz={14}
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
							<Text c="#555459" fz={14} fw={600} mt={34}>
								Parametres
							</Text>
							<Text c="#555459" fz={12} fw={600} mt={34}>
								Item
							</Text>
							<Text c="#555459" fz={12} fw={600} mt={20}>
								Model
							</Text>
							<Text c="#555459" fz={12} fw={600} mt={20}>
								Input Sensor
							</Text>
							<Text c="#555459" fz={12} fw={600} mt={20}>
								Sensor Output
							</Text>
							<Text c="#555459" fz={12} fw={600} mt={20}>
								Sensor Supply
							</Text>
							<Text c="#555459" fz={12} fw={600} mt={20}>
								Humidity Range
							</Text>
							<Text c="#555459" fz={12} fw={600} mt={20}>
								Humidity Accuracy
							</Text>
							<Text c="#555459" fz={12} fw={600} mt={20}>
								Type
							</Text>
							<Text c="#555459" fz={12} fw={600} mt={20}>
								Size
							</Text>
							<Text c="#555459" fz={12} fw={600} mt={20}>
								Cable / Enclosure
							</Text>
							<Text c="#555459" fz={12} fw={600} mt={20}>
								Precautions for use
							</Text>
						</Stack>
						<Stack ml={110}>
							<Text c="#555459" fz={14} fw={600} mt={34}>
								Description
							</Text>
							<Text c="#828282" fz={12} fw={400} mt={34}>
								(T + RH) Sensor (OEM version)
							</Text>
							<Text c="#828282" fz={12} fw={400} mt={20}>
								HS – 440 (Only For Humidity)
							</Text>
							<Text c="#828282" fz={12} fw={400} mt={20}>
								For Temp.: Class A RTD Pt-100 element (Hayashi Denko – Japan)For %Rh: Honeywell make
								Humidity sensor HIH-4000{" "}
							</Text>
							<Text c="#828282" fz={12} fw={400} mt={20}>
								For Temperature Pt-100: 84.27 Ohms to 123.24 Ohms (-40 to 60 °C) (Alpha =
								0.00385)For %Rh: 0.0Volt @ 0% Rh and 3.33Vdc @ 100%Rh or0 to 1Vdc Linear{" "}
							</Text>
							<Text c="#828282" fz={12} fw={400} mt={20}>
								+/- 1 °C for Thermocouple throughout the range (Software linearized){" "}
							</Text>
							<Text c="#828282" fz={12} fw={400} mt={20}>
								0 to 100% Rh @ 0 to 50 °C0 to 90% @ 0 to 60 °C0 to 90% @ -10 to 50 °C{" "}
							</Text>
							<Text c="#828282" fz={12} fw={400} mt={20}>
								+/- 3% @ 25 °C / 50 %Rh{" "}
							</Text>
							<Text c="#828282" fz={12} fw={400} mt={20}>
								Wall / Surface Mounted
							</Text>
							<Text c="#828282" fz={12} fw={400} mt={20}>
								20 mm dia. x 75 mm long
							</Text>
							<Text c="#828282" fz={12} fw={400} mt={20}>
								2 to 5 meter PVC/PVC insulated multi-core cable with pin lugs / SS plastic.{" "}
							</Text>
							<Text c="#828282" fz={12} fw={400} mt={20}>
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
						w={308}
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
								<Table.Th fz={14} c={"#555459"} fw={600}>
									Type
								</Table.Th>
								<Table.Th fz={14} c={"#555459"} fw={600}>
									Input
								</Table.Th>
								<Table.Th fz={14} c={"#555459"} fw={600} ta={"end"} pr={32}>
									Range (°C)
								</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							<Table.Tr>
								<Table.Td fz={12} c={"#555459"} fw={600}>
									A0
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"}>
									User selectable K,R,S,B,
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"} ta={"end"} pr={45}>
									As below
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={12} c={"#555459"} fw={600}>
									A1
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"}>
									K type : Cr/Al thermocouple
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"} pr={45} ta={"end"}>
									0 to 1372
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={12} c={"#555459"} fw={600}>
									A2
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"}>
									R type : Pt/PtRh13% thermocouple
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"} pr={45} ta={"end"}>
									0 to 1768
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={12} c={"#555459"} fw={600}>
									A3
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"}>
									S type : Pt/PtRh10% - thermocouple
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"} pr={45} ta={"end"}>
									0 to 1768
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={12} c={"#555459"} fw={600}>
									A4
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"}>
									R type : Pt/PtRh13% thermocouple
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"} pr={45} ta={"end"}>
									0 to 1768
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={12} c={"#555459"} fw={600}>
									A5
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"}>
									R type : Pt/PtRh13% thermocouple
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"} pr={45} ta={"end"}>
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
						w={308}
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
								<Table.Th fz={14} c={"#555459"} fw={600}>
									Type
								</Table.Th>
								<Table.Th fz={14} c={"#555459"} fw={600}>
									Specifications
								</Table.Th>
								<Table.Th fz={14} c={"#555459"} fw={600} ta={"end"} pr={32}>
									Part No.
								</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							<Table.Tr>
								<Table.Td fz={12} c={"#555459"} fw={600}>
									A0
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"} ta={"end"} pr={45}>
									1703-1
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={12} c={"#555459"} fw={600}>
									A1
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"} pr={45} ta={"end"}>
									1703-1
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={12} c={"#555459"} fw={600}>
									A2
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"} pr={45} ta={"end"}>
									1703-1
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={12} c={"#555459"} fw={600}>
									A3
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"} pr={45} ta={"end"}>
									1703-1
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={12} c={"#555459"} fw={600}>
									A4
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"} pr={45} ta={"end"}>
									1703-1
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fz={12} c={"#555459"} fw={600}>
									A5
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"} w={877}>
									Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
									and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
									°C).
								</Table.Td>
								<Table.Td fz={12} fw={400} c={"#828282"} pr={45} ta={"end"}>
									1703-1
								</Table.Td>
							</Table.Tr>
						</Table.Tbody>
					</Table>
				</Group>
			</Paper>
			<Paper bg={"#f4f4f4"} w={1440} h={1040} visibleFrom="xs">
				<Box>
					<Text ta="center" c="#292929" fz={32} fw={600} pt={69}>
						Compare the models
					</Text>
					<Text ta="center" c="#828282" fz={16} fw={400}>
						Compare with similar items
					</Text>
				</Box>
				<ScrollArea w={1240} h={860} onScrollPositionChange={onScrollPositionChange}>
					<Group wrap="nowrap" ta="center">
						<Card bg={"#FFF"} w={273} h={709} ml={145} mt={64}>
							<Text ta="left" fz={12} c="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Panel} w={131} h={167} mt={32} ml={70} />
							<Stack ta={"left"}>
								<Text c="#555459" fz={12} fw={600} mt={32}>
									Key Features
								</Text>
								<Text c="#555459" fz={12} fw={600}>
									Design
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={12} fw={600}>
									Input
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={12} fw={600}>
									Range
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={12} fw={600}>
									Resolution
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
						<Card bg={"#FFF"} w={273} h={709} ml={20} mt={64}>
							<Text ta="left" fz={12} c="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Model2} w={167} h={167} mt={32} ml={50} />
							<Stack ta={"left"}>
								<Text c="#555459" fz={12} fw={600} mt={32}>
									Key Features
								</Text>
								<Text c="#555459" fz={12} fw={600}>
									Design
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={12} fw={600}>
									Input
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={12} fw={600}>
									Range
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={12} fw={600}>
									Resolution
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
						<Card bg={"#FFF"} w={273} h={709} ml={20} mt={64}>
							<Text ta="left" fz={12} c="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Panel} w={131} h={167} mt={32} ml={70} />
							<Stack ta={"left"}>
								<Text c="#555459" fz={12} fw={600} mt={32}>
									Key Features
								</Text>
								<Text c="#555459" fz={12} fw={600}>
									Design
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={12} fw={600}>
									Input
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={12} fw={600}>
									Range
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={12} fw={600}>
									Resolution
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
						<Card bg={"#FFF"} w={273} h={709} ml={20} mt={64}>
							<Text ta="left" fz={12} c="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Model2} w={167} h={167} mt={32} ml={50} />
							<Stack ta={"left"}>
								<Text c="#555459" fz={12} fw={600} mt={32}>
									Key Features
								</Text>
								<Text c="#555459" fz={12} fw={600}>
									Design
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={12} fw={600}>
									Input
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={12} fw={600}>
									Range
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text c="#555459" fz={12} fw={600}>
									Resolution
								</Text>
								<Text c="#828282" fz={12} fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
					</Group>
				</ScrollArea>
			</Paper>
			<Paper w={1440} h={864} visibleFrom="xs">
				<Box>
					<Text c="#292929" size="xl" fw={600} ta="center" pt={81}>
						Related Products
					</Text>
				</Box>
				<Group wrap="nowrap" ta="center">
					<Card bg={"#f7f7f7"} h={440} w={273} ml={144} mt={47}>
						<Text ta="left" fz={12} c="#555459" fw={700}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} w={131} h={166} mt={32} ml={55} />
						<Text ta="center" size="md" fw={400} c="#414141" mt={34}>
							₹12,600 – ₹14,700
						</Text>
						<Stack gap="xs" align="stretch" py={15}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
					<Card bg={"#f7f7f7"} h={440} w={273} ml={20} mt={47}>
						<Text ta="left" fz={12} c="#555459" fw={700}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} w={131} h={166} mt={32} ml={55} />
						<Text ta="center" size="md" fw={400} c="#414141" mt={34}>
							₹12,600 – ₹14,700
						</Text>
						<Stack gap="xs" align="stretch" py={15}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
					<Card bg={"#f7f7f7"} h={440} w={273} ml={20} mt={47}>
						<Text ta="left" fz={12} c="#555459" fw={700}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} w={131} h={166} mt={32} ml={55} />
						<Text ta="center" size="md" fw={400} c="#414141" mt={34}>
							₹12,600 – ₹14,700
						</Text>
						<Stack gap="xs" align="stretch" py={15}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
					<Card bg={"#f7f7f7"} h={440} w={273} ml={20} mt={47}>
						<Text ta="left" fz={12} c="#555459" fw={700}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} w={131} h={166} mt={32} ml={55} />
						<Text ta="center" size="md" fw={400} c="#414141" mt={34}>
							₹12,600 – ₹14,700
						</Text>
						<Stack gap="xs" align="stretch" py={15}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
				</Group>
			</Paper>
		</>
	);
};

export default InnerProduct;

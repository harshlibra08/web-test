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
	AppShell,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import Category from "./Assets/category.png";
import GlassManufacturing from "./Assets/glass-manufacturing.png";
import YellowMob from "../src/Assets/Rectangle yellow mob.png";
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
			<Paper w={{ base: 360, lg: 1440 }} h={{ base: 6855, lg: 5968 }} pt={{ base: 30, lg: 100 }}>
				<Grid>
					<Grid.Col span={{ base: 12, lg: 6 }}>
						<Image
							src={RectangleGreyLeft}
							h={{ base: 401, lg: 1039 }}
							w={{ base: 360, lg: 710 }}
							pos="absolute"
						/>
						<Image
							src={Panel}
							alt="Vision"
							w={{ base: 181, lg: 256 }}
							h={{ base: 231, lg: 327 }}
							pos={"absolute"}
							ml={{ base: 89, lg: 227 }}
							mt={{ base: 40, lg: 90 }}
						/>

						<Image
							src={PanelFront}
							w={{ base: 60, lg: 62 }}
							h={60}
							pos={"absolute"}
							left={{ base: 75, lg: 253 }}
							mt={{ base: 307, lg: 458 }}
						/>

						<Image
							src={Panel2}
							alt="Vision"
							w={53}
							h={60}
							pos={"absolute"}
							left={{ base: 148, lg: 333 }}
							mt={{ base: 307, lg: 458 }}
						/>
						<Image
							src={PanelFront}
							w={{ base: 60, lg: 62 }}
							h={60}
							pos={"absolute"}
							left={{ base: 224, lg: 403 }}
							mt={{ base: 307, lg: 458 }}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 6 }} mt={{ base: 425, lg: 43 }}>
						<Text
							fz={{ base: 16, lg: 24 }}
							w={{ base: 328, lg: 500 }}
							fw={600}
							ml={{ base: 16, lg: 98 }}
							c="#292929"
						>
							Three Phase Thyristor Power Controller – POW-3-PA{" "}
						</Text>
						<Text
							c="#777"
							fz={{ base: 10, lg: 12 }}
							fw={400}
							ml={{ base: 16, lg: 98 }}
							mt={{ base: 4 }}
						>
							Digital Indicator : Category
						</Text>
						<Text
							c="#262728"
							fz={{ base: 20, lg: 24 }}
							fw={600}
							ml={{ base: 16, lg: 98 }}
							mt={{ base: 16, lg: 24 }}
						>
							₹ 3,000-₹ 4000
						</Text>
						<Text c="#FF6951" fz={{ base: 10 }} fw={400} ml={{ base: 16, lg: 98 }} mt={{ base: 4 }}>
							Prices are inclusive of Delivery Charges.
						</Text>
						<Text
							c="#555459"
							fz={{ base: 12, lg: 14 }}
							fw={300}
							ml={{ base: 16, lg: 98 }}
							mt={{ base: 24, lg: 48 }}
						>
							Configuration: (1 AI + 1 AO )<br /> Size: 96 x 96 x 75
							<br /> Part No: 1304
						</Text>
						<Group ml={{ base: 16, lg: 98 }} mt={{ base: 24 }} w={500}>
							<Text c="#555459" fz={{ base: 12, lg: 14 }}>
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

						{/* <Grid ml={{ base: 16, lg: 98 }}>
							<Grid.Col span={{ base: 12, lg: 6 }}>
								<Select
									styles={{
										input: {
											height: 40,
											width: 222,
										},
									}}
									label="Select Part Number"
									placeholder="Choose an option"
								></Select>
							</Grid.Col>
							<Grid.Col span={{ base: 12, lg: 6 }}>
								<Select
									styles={{
										input: {
											height: 40,
											width: 222,
										},
									}}
									label="Select Relay Card"
									placeholder="Choose an option"
								></Select>
							</Grid.Col>
						</Grid> */}

						<Stack ml={{ base: 16, lg: 98 }} mt={{ base: 24 }} w={{ base: 328 }} hiddenFrom="xs">
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

						<Group
							ml={{ base: 16, lg: 98 }}
							mt={{ base: 24 }}
							w={{ base: 328, lg: 720 }}
							visibleFrom="md"
						>
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
						</Group>
						<Group mt={{ base: 24 }} ml={{ base: 16, lg: 98 }}>
							<PrimaryButton w={157}>Add to Cart</PrimaryButton>
							<OptionsButton w={155}>Buy Now</OptionsButton>
						</Group>
						<Text
							fw={600}
							fz={{ base: 16 }}
							c="#262728"
							ml={{ base: 16, lg: 98 }}
							w={{ base: 308 }}
							mt={{ base: 33 }}
						>
							{" "}
							Key Features
							<List
								mt={{ base: 19 }}
								fz={{ base: 12, lg: 14 }}
								c={"#555459"}
								fw={400}
								w={{ lg: 431 }}
							>
								<List.Item>Accepts thermocouple, RTD(Pt-100), Infrared pyrometer.</List.Item>
								<List.Item>Both switching and linear PID control outputs.</List.Item>
								<List.Item>Servo start from the process temperature. </List.Item>
								<List.Item>
									User programmable 1-10 different patterns of ramp/soak steps.{" "}
								</List.Item>
								<List.Item>
									Retention and auto-execution of program in case of power failure.{" "}
								</List.Item>
								<List.Item>Facility to use as PID and ON / OFF controller. </List.Item>
							</List>
						</Text>
						<Text
							fw={600}
							fz={{ base: 14 }}
							c="#262728"
							ml={{ base: 16, lg: 98 }}
							w={{ base: 308 }}
							mt={{ base: 33, lg: 24 }}
						>
							{" "}
							Applications
							<List
								mt={{ base: 19 }}
								fz={{ base: 12, lg: 14 }}
								c={"#555459"}
								fw={400}
								w={{ lg: 431 }}
							>
								<List.Item>Accepts thermocouple, RTD(Pt-100), Infrared pyrometer.</List.Item>
								<List.Item>Both switching and linear PID control outputs.</List.Item>
								<List.Item>Servo start from the process temperature. </List.Item>
								<List.Item>
									User programmable 1-10 different patterns of ramp/soak steps.{" "}
								</List.Item>
								<List.Item>
									Retention and auto-execution of program in case of power failure.{" "}
								</List.Item>
								<List.Item>Facility to use as PID and ON / OFF controller. </List.Item>
							</List>
						</Text>
					</Grid.Col>
				</Grid>

				<Paper w={{ base: 360, lg: 1440 }} withBorder mt={{ base: 50, lg: 50 }}>
					<Tabs c={"#555459"} defaultValue={"desc"}>
						<Tabs.List h={63}>
							<Tabs.Tab value="desc" ml={{ lg: 72 }}>
								<Text fz={{ base: 12, lg: 14 }} w={{ base: 65, lg: 75 }} c={"#292929"}>
									Description
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="spec" ml={{ lg: 72 }}>
								<Text fz={{ base: 12, lg: 14 }} w={{ base: 71, lg: 90 }} c={"#292929"}>
									Specification
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="i/o" ml={{ lg: 72 }}>
								<Text fz={{ base: 12, lg: 14 }} w={{ base: 71, lg: 153 }} c={"#292929"}>
									Input and output range
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="ordering" ml={{ lg: 72 }}>
								<Text fz={{ base: 12, lg: 14 }} w={{ base: 71 }} c={"#292929"}>
									Ordering Information
								</Text>
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
				</Paper>

				<Grid>
					<Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 1, lg: 2 }}>
						<Image
							src={InnerYellowBg}
							w={{ base: 260, lg: 418 }}
							h={{ base: 289, lg: 676 }}
							pos={"absolute"}
							ml={{ base: 100, lg: 295 }}
						/>

						<Image
							src={Category}
							w={{ base: 328, lg: 528 }}
							h={{ base: 241, lg: 424 }}
							pos={"absolute"}
							ml={{ base: 16, lg: 154 }}
							mt={{ base: 24, lg: 102 }}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 2, lg: 1 }}>
						<Text
							fz={{ base: 16, lg: 24 }}
							w={{ base: 328, lg: 598 }}
							fw={600}
							ml={{ base: 16, lg: 144 }}
							mt={{ base: 313, lg: 99 }}
							c={"#292929"}
						>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>

						<Text
							w={{ base: 328, lg: 664 }}
							style={{ color: "#555459" }}
							fz={{ base: 12, lg: 14 }}
							fw={400}
							mt={{ base: 12 }}
							ml={{ base: 16, lg: 144 }}
							// lineClamp={5}
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
						<UnstyledButton ml={{ base: 16 }} mt={{ base: 16 }} c={"#555459"} hiddenFrom="xs">
							<Text fz={{ base: 12, lg: 14 }}>Read More</Text>
						</UnstyledButton>
					</Grid.Col>
				</Grid>

				<Paper
					w={{ base: 360, lg: 1441 }}
					bg={"#f1f1f1"}
					h={{ base: 716, lg: 1038 }}
					mt={{ base: 36, lg: 56 }}
				>
					<Text
						ta="center"
						c="#292929"
						fz={{ base: 16, lg: 32 }}
						fw={600}
						pt={{ base: 36, lg: 69 }}
					>
						Compare the models
					</Text>

					<ScrollArea
						w={{ base: 360, lg: 1440 }}
						h={{ base: 620, lg: 820 }}
						onScrollPositionChange={onScrollPositionChange}
					>
						<Group wrap="nowrap" mt={{ lg: 89 }}>
							<Card
								bg={"#FFF"}
								w={{ base: 156, lg: 273 }}
								h={{ base: 553, lg: 709 }}
								ml={{ base: 16, lg: 145 }}
								mt={{ base: 20 }}
								radius={10}
							>
								<Text
									w={{ base: 132, lg: 249 }}
									fz={{ base: 12, lg: 16 }}
									c="#555459"
									fw={700}
									mt={{ lg: 24 }}
									px={{ lg: 12 }}
								>
									Temperature Indicator – DPI-902
								</Text>
								<Image
									src={Panel}
									w={{ base: 73, lg: 131 }}
									h={{ base: 93, lg: 167 }}
									mt={{ base: 16, lg: 32 }}
									ml={{ base: 20, lg: 52 }}
								/>{" "}
								<Stack gap={8}>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600} mt={32}>
										Key Features
									</Text>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600} mt={{ lg: 32 }}>
										Design
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600}>
										Input
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600}>
										Range
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600}>
										Resolution
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
								</Stack>
							</Card>
							<Card
								bg={"#FFF"}
								w={{ base: 156, lg: 273 }}
								h={{ base: 553, lg: 709 }}
								ml={{ base: 16 }}
								mt={20}
								radius={10}
							>
								<Text
									w={{ base: 132, lg: 249 }}
									fz={{ base: 12, lg: 16 }}
									c="#555459"
									fw={700}
									mt={{ lg: 24 }}
									px={{ lg: 12 }}
								>
									Temperature Indicator – DPI-902
								</Text>
								<Image
									src={Panel}
									w={{ base: 73, lg: 131 }}
									h={{ base: 93, lg: 167 }}
									mt={{ base: 16, lg: 32 }}
									ml={{ base: 20, lg: 52 }}
								/>{" "}
								<Stack gap={8}>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600} mt={32}>
										Key Features
									</Text>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600} mt={{ lg: 32 }}>
										Design
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600}>
										Input
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600}>
										Range
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600}>
										Resolution
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
								</Stack>
							</Card>
							<Card
								bg={"#FFF"}
								w={{ base: 156, lg: 273 }}
								h={{ base: 553, lg: 709 }}
								ml={{ base: 16 }}
								mt={20}
								radius={10}
							>
								<Text
									w={{ base: 132, lg: 249 }}
									fz={{ base: 12, lg: 16 }}
									c="#555459"
									fw={700}
									mt={{ lg: 24 }}
									px={{ lg: 12 }}
								>
									Temperature Indicator – DPI-902
								</Text>
								<Image
									src={Panel}
									w={{ base: 73, lg: 131 }}
									h={{ base: 93, lg: 167 }}
									mt={{ base: 16, lg: 32 }}
									ml={{ base: 20, lg: 52 }}
								/>{" "}
								<Stack gap={8}>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600} mt={32}>
										Key Features
									</Text>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600} mt={{ lg: 32 }}>
										Design
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600}>
										Input
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600}>
										Range
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600}>
										Resolution
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
								</Stack>
							</Card>
							<Card
								bg={"#FFF"}
								w={{ base: 156, lg: 273 }}
								h={{ base: 553, lg: 709 }}
								ml={{ base: 16 }}
								mt={20}
								radius={10}
							>
								<Text
									w={{ base: 132, lg: 249 }}
									fz={{ base: 12, lg: 16 }}
									c="#555459"
									fw={700}
									mt={{ lg: 24 }}
									px={{ lg: 12 }}
								>
									Temperature Indicator – DPI-902
								</Text>

								<Image
									src={Panel}
									w={{ base: 73, lg: 131 }}
									h={{ base: 93, lg: 167 }}
									mt={{ base: 16, lg: 32 }}
									ml={{ base: 20, lg: 52 }}
								/>
								<Stack gap={8}>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600} mt={32}>
										Key Features
									</Text>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600} mt={{ lg: 32 }}>
										Design
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600}>
										Input
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600}>
										Range
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
									<Divider></Divider>
									<Text c="#555459" fz={{ base: 12, lg: 14 }} fw={600}>
										Resolution
									</Text>
									<Text c="#828282" fz={{ base: 10, lg: 12 }} fw={400} w={{ base: 140, lg: 248 }}>
										Microcontroller based with 12 bit ADC and dual 12 bit DAC
									</Text>
								</Stack>
							</Card>
						</Group>
					</ScrollArea>
				</Paper>

				<Paper w={{ base: 360 }} h={633} hiddenFrom="xs">
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
				<Paper w={1440} h={691} visibleFrom="md">
					<Text c="#292929" fz={32} fw={600} mt={81} ta={"center"}>
						Related Products
					</Text>
					<Group wrap="nowrap" ta="center" mx={144} gap={20}>
						<Card h={440} w={273} mt={32} bg={"#f7f7f7"}>
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
						<Card h={440} w={273} mt={32} bg={"#f7f7f7"}>
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
						<Card h={440} w={273} mt={32} bg={"#f7f7f7"}>
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
						<Card h={440} w={273} mt={32} bg={"#f7f7f7"}>
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

				<Paper w={{ base: 360, lg: 1440 }} mt={{ base: 150, lg: 45 }} hiddenFrom="xs">
					<Tabs c={"#555459"} ml={{ base: 16 }} defaultValue={"spec"}>
						<Tabs.List h={{ base: 63 }}>
							<Tabs.Tab value="desc">
								<Text fz={{ base: 12, lg: 14 }} w={{ base: 65 }} c={"#292929"}>
									Description
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="spec">
								<Text fz={{ base: 12, lg: 14 }} w={{ base: 71 }} c={"#292929"}>
									Specification
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="i/o">
								<Text fz={{ base: 12, lg: 14 }} w={{ base: 111 }} c={"#292929"}>
									Input and output range
								</Text>
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
				</Paper>

				<Text fz={24} ml={144} mt={45} fw={600} visibleFrom="md">
					Specifications
				</Text>
				<Table
					w={{ base: 360, lg: 1152 }}
					withRowBorders={false}
					ml={{ base: 16, lg: 144 }}
					verticalSpacing={"md"}
					mt={{ lg: 34 }}
				>
					<Table.Thead>
						<Table.Tr>
							<Table.Th fz={{ base: 12, lg: 14 }} c={"#555459"} fw={600} w={{ base: 139, lg: 239 }}>
								Paramenters
							</Table.Th>
							<Table.Th fz={{ base: 12, lg: 14 }} c={"#555459"} fw={600}>
								Description{" "}
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={{ base: 12, lg: 14 }} c={"#555459"} fw={600}>
								Item
							</Table.Td>
							<Table.Td fz={{ base: 12, lg: 14 }} fw={400} c={"#828282"}>
								(T + RH) Sensor (OEM version)
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12, lg: 14 }} c={"#555459"} fw={600}>
								Model
							</Table.Td>
							<Table.Td fz={{ base: 12, lg: 14 }} fw={400} c={"#828282"}>
								HS – 440 (Only For Humidity)
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12, lg: 14 }} c={"#555459"} fw={600}>
								Input Sensor
							</Table.Td>
							<Table.Td fz={{ base: 12, lg: 14 }} fw={400} c={"#828282"}>
								For Temp.: Class A RTD Pt-100 element (Hayashi Denko – Japan)For %Rh: Honeywell make
								Humidity sensor HIH-4000
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12, lg: 14 }} c={"#555459"} fw={600}>
								Sensor Output
							</Table.Td>
							<Table.Td fz={{ base: 12, lg: 14 }} fw={400} c={"#828282"}>
								For Temperature Pt-100: 84.27 Ohms to 123.24 Ohms (-40 to 60 °C) (Alpha =
								0.00385)For %Rh: 0.0Volt @ 0% Rh and 3.33Vdc @ 100%Rh or0 to 1Vdc Linear
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12, lg: 14 }} c={"#555459"} fw={600}>
								Sensor Supply
							</Table.Td>
							<Table.Td fz={{ base: 12, lg: 14 }} fw={400} c={"#828282"}>
								+/- 1 °C for Thermocouple throughout the range (Software linearized)
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12, lg: 14 }} c={"#555459"} fw={600}>
								Humidity Range
							</Table.Td>
							<Table.Td fz={{ base: 12, lg: 14 }} fw={400} c={"#828282"}>
								0 to 100% Rh @ 0 to 50 °C0 to 90% @ 0 to 60 °C0 to 90% @ -10 to 50 °C
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12, lg: 14 }} c={"#555459"} fw={600}>
								Humidity Accuracy
							</Table.Td>
							<Table.Td fz={{ base: 12, lg: 14 }} fw={400} c={"#828282"}>
								+/- 3% @ 25 °C / 50 %Rh
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12, lg: 14 }} c={"#555459"} fw={600}>
								Type
							</Table.Td>
							<Table.Td fz={{ base: 12, lg: 14 }} fw={400} c={"#828282"}>
								+/- 3% @ 25 °C / 50 %Rh
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12, lg: 14 }} c={"#555459"} fw={600}>
								Size
							</Table.Td>
							<Table.Td fz={{ base: 12, lg: 14 }} fw={400} c={"#828282"}>
								20 mm dia. x 75 mm long
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12, lg: 14 }} c={"#555459"} fw={600}>
								Cable / Enclosure
							</Table.Td>
							<Table.Td fz={{ base: 12, lg: 14 }} fw={400} c={"#828282"}>
								2 to 5 meter PVC/PVC insulated multi-core cable with pin lugs / SS plastic.
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={{ base: 12, lg: 14 }} c={"#555459"} fw={600}>
								Precautions for use
							</Table.Td>
							<Table.Td fz={{ base: 12, lg: 14 }} fw={400} c={"#828282"}>
								Avoid condensation and drench. Avoid exposure to Saline, Inorganic and Organic Gas.g
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>

				<Paper w={{ base: 360 }} mt={{ base: 50 }} hiddenFrom="xs">
					<Tabs c={"#555459"} ml={{ base: 16 }} defaultValue={"i/o"}>
						<Tabs.List h={{ base: 63 }}>
							<Tabs.Tab value="desc">
								<Text fz={{ base: 12, lg: 14 }} w={{ base: 65 }} c={"#292929"}>
									Description
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="spec">
								<Text fz={{ base: 12, lg: 14 }} w={{ base: 71 }} c={"#292929"}>
									Specification
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="i/o">
								<Text fz={{ base: 12, lg: 14 }} w={{ base: 71 }} c={"#292929"}>
									Input and output range
								</Text>
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
				</Paper>

				<Autocomplete
					hiddenFrom="xs"
					ml={{ base: 16, lg: 98 }}
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
				<Group visibleFrom="md">
					<Text fz={24} w={319} ml={144} mt={45} fw={600}>
						Ordering Information
					</Text>
					<Autocomplete
						placeholder="Search for order Info"
						leftSection={<IconSearch size="20px" stroke={1.5} color="#555459" />}
						data={[]}
						mt={45}
						ml={631}
						radius={32}
						w={202}
						h={36}
						styles={{
							input: {
								backgroundColor: "#F0F0F0",
								border: "none",
							},
						}}
					/>
				</Group>

				<Table
					ml={{ base: 16, lg: 144 }}
					mt={{ base: 12, lg: 29 }}
					w={{ base: 328, lg: 1152 }}
					striped
					withTableBorder
					withColumnBorders
					verticalSpacing={"lg"}
				>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{ base: 12, lg: 14 }} ta={"center"}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{ base: 12, lg: 14 }}>
								Specifications
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{ base: 12, lg: 14 }} ta={"center"}>
								Part No.{" "}
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={12} c={"#555459"} fw={600} ta={"center"}>
								A0
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} w={{ lg: 877 }}>
								Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
								and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
								°C).
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} ta={"center"}>
								1703-1
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={12} c={"#555459"} fw={600} ta={"center"}>
								A0
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} w={{ lg: 877 }}>
								Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
								and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
								°C).
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} ta={"center"}>
								1703-1
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={12} c={"#555459"} fw={600} ta={"center"}>
								A0
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} w={{ lg: 877 }}>
								Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
								and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
								°C).
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} ta={"center"}>
								1703-1
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={12} c={"#555459"} fw={600} ta={"center"}>
								A0
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} w={{ lg: 877 }}>
								Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
								and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
								°C).
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} ta={"center"}>
								1703-1
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={12} c={"#555459"} fw={600} ta={"center"}>
								A0
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} w={{ lg: 877 }}>
								Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or Low
								and End of Profile Relay outputs.For High Temperature Furnace control (up to 1700
								°C).
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} ta={"center"}>
								1703-1
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>

				<Paper w={{ base: 360 }} mt={{ base: 50 }} hiddenFrom="xs">
					<Tabs c={"#555459"} ml={{ base: 16 }} defaultValue={"i/o"}>
						<Tabs.List h={{ base: 63 }}>
							<Tabs.Tab value="desc">
								<Text fz={{ base: 12, lg: 14 }} w={{ base: 65 }} c={"#292929"}>
									Description
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="spec">
								<Text fz={{ base: 12, lg: 14 }} w={{ base: 71 }} c={"#292929"}>
									Specification
								</Text>
							</Tabs.Tab>
							<Tabs.Tab value="i/o">
								<Text fz={{ base: 12, lg: 14 }} w={{ base: 71 }} c={"#292929"}>
									Input and output range
								</Text>
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
				</Paper>
				<Autocomplete
					hiddenFrom="xs"
					ml={{ base: 16, lg: 98 }}
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

				<Group visibleFrom="md">
					<Text fz={24} w={319} ml={144} mt={105} fw={600}>
						Input and Output Range
					</Text>
					<Autocomplete
						placeholder="Search for technical Info"
						leftSection={<IconSearch size="20px" stroke={1.5} color="#555459" />}
						data={[]}
						mt={105}
						ml={611}
						radius={32}
						w={222}
						h={36}
						styles={{
							input: {
								backgroundColor: "#F0F0F0",
								border: "none",
							},
						}}
					/>
				</Group>
				<Table
					ml={{ base: 16, lg: 144 }}
					mt={{ base: 12, lg: 29 }}
					w={{ base: 328, lg: 1152 }}
					withTableBorder
					withColumnBorders
					striped
					verticalSpacing={"lg"}
				>
					<Table.Thead>
						<Table.Tr>
							<Table.Th c={"#555459"} fw={400} fz={{ base: 12, lg: 14 }} ta={"center"}>
								Type
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{ base: 12, lg: 14 }} w={{ lg: 924 }}>
								Input
							</Table.Th>
							<Table.Th c={"#555459"} fw={600} fz={{ base: 12, lg: 14 }} ta={"center"}>
								Range (°C)
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<Table.Tr>
							<Table.Td fz={12} c={"#555459"} fw={600} ta={"center"}>
								A0
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} ta={"center"}>
								0 to 1372{" "}
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={12} c={"#555459"} fw={600} ta={"center"}>
								A0
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} ta={"center"}>
								0 to 1372{" "}
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={12} c={"#555459"} fw={600} ta={"center"}>
								A0
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} ta={"center"}>
								0 to 1372{" "}
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={12} c={"#555459"} fw={600} ta={"center"}>
								A0
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} ta={"center"}>
								0 to 1372{" "}
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={12} c={"#555459"} fw={600} ta={"center"}>
								A0
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} ta={"center"}>
								0 to 1372{" "}
							</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td fz={12} c={"#555459"} fw={600} ta={"center"}>
								A0
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"}>
								User selectable K,R,S,B,
							</Table.Td>
							<Table.Td fz={12} fw={400} c={"#828282"} ta={"center"}>
								0 to 1372{" "}
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
			</Paper>
		</>
	);
};

export default InnerProduct;

import {
	Paper,
	Grid,
	Box,
	UnstyledButton,
	Text,
	Image,
	Card,
	Group,
	Stack,
	List,
	Divider,
	Pagination,
} from "@mantine/core";
import React from "react";
import GlassManufacturing from "./Assets/glass-manufacturing.png";
import YellowBg from "./Assets/yellowBg.png";
import YellowMob from "../src/Assets/Rectangle yellow mob.png";
import Panel from "./Assets/panel.png";
import { IconCheck, IconCoin } from "@tabler/icons-react";
import { OptionsButton, PrimaryButton } from "./BaseApp/App";
import subcat1 from "../src/Assets/subcat1.png";
import subcat2 from "../src/Assets/subcat2.png";
import subcat3 from "../src/Assets/subcat3.png";
import subcatbg from "../src/Assets/subcat5.png";
import i from "../src/Assets/ipadRect.png";
import ipaD from "../src/Assets/ipadcarousel.png";
import { Carousel } from "@mantine/carousel";
type Props = {};

const ProductsList = (props: Props) => {
	return (
		<>
			<Paper w={1440} visibleFrom="md">
				<Grid>
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
			</Paper>
			<Paper w={1440} bg={"#F4F4F4"} h={2543} mt={200} visibleFrom="md">
				<Card w={1212} h={384} bg={"#FFF"} top={39} ml={114} withBorder>
					<Group>
						<Image src={Panel} w={284} h={284} ml={47} mt={49} />
						<Stack>
							<Text fz={18} fw={600} c={"#414141"} ml={37}>
								Three Phase Thyristor Power Controller
							</Text>
							<Text c={"#E83214"} ml={37} fz={14} fw={600}>
								POW-3-PA-CL
							</Text>
							<List w={356} c={"#555459"} fz={12} fw={400} ml={37}>
								<List.Item>
									Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire
									Star
								</List.Item>
								<List.Item>
									3 Wire Close or Open Delta Configurations with Current Control/Current Limit and
									Over Load Protection.
								</List.Item>
							</List>
						</Stack>
						<Divider orientation="vertical" ml={64} my={38}></Divider>
						<Stack justify="flex-start" w={290}>
							<Text fz={10} c={"#828282"} fw={400} ml={64}>
								Prices are inclusive of Delivery Charges.
							</Text>
							<Text fz={24} fw={400} c={"#555459"} ml={64}>
								₹12,600 – ₹14,700
							</Text>

							<List ml={64}>
								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									In Stock
								</List.Item>

								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									<Text lineClamp={1}>
										Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards EMI{" "}
									</Text>
								</List.Item>

								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									<Text lineClamp={1}>Get 10% Instant Discount Up to ₹2250</Text>
								</List.Item>
							</List>
							<Stack>
								<OptionsButton ml={66} w={290}>
									Select Options
								</OptionsButton>
								<PrimaryButton ml={66} w={290}>
									ADD TO WISHLIST
								</PrimaryButton>
							</Stack>
						</Stack>
					</Group>
				</Card>
				<Card w={1212} h={384} bg={"#FFF"} top={39} ml={114} withBorder mt={40}>
					<Group>
						<Image src={Panel} w={284} h={284} ml={47} mt={49} />
						<Stack>
							<Text fz={18} fw={600} c={"#414141"} ml={37}>
								Three Phase Thyristor Power Controller
							</Text>
							<Text c={"#E83214"} ml={37} fz={14} fw={600}>
								POW-3-PA-CL
							</Text>
							<List w={356} c={"#555459"} fz={12} fw={400} ml={37}>
								<List.Item>
									Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire
									Star
								</List.Item>
								<List.Item>
									3 Wire Close or Open Delta Configurations with Current Control/Current Limit and
									Over Load Protection.
								</List.Item>
							</List>
						</Stack>
						<Divider orientation="vertical" ml={64} my={38}></Divider>
						<Stack justify="flex-start" w={290}>
							<Text fz={10} c={"#828282"} fw={400} ml={64}>
								Prices are inclusive of Delivery Charges.
							</Text>
							<Text fz={24} fw={400} c={"#555459"} ml={64}>
								₹12,600 – ₹14,700
							</Text>

							<List ml={64}>
								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									In Stock
								</List.Item>

								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									<Text lineClamp={1}>
										Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards EMI{" "}
									</Text>
								</List.Item>

								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									<Text lineClamp={1}>Get 10% Instant Discount Up to ₹2250</Text>
								</List.Item>
							</List>
							<Stack>
								<OptionsButton ml={66} w={290}>
									Select Options
								</OptionsButton>
								<PrimaryButton ml={66} w={290}>
									ADD TO WISHLIST
								</PrimaryButton>
							</Stack>
						</Stack>
					</Group>
				</Card>
				<Card w={1212} h={384} bg={"#FFF"} top={39} ml={114} withBorder mt={40}>
					<Group>
						<Image src={Panel} w={284} h={284} ml={47} mt={49} />
						<Stack>
							<Text fz={18} fw={600} c={"#414141"} ml={37}>
								Three Phase Thyristor Power Controller
							</Text>
							<Text c={"#E83214"} ml={37} fz={14} fw={600}>
								POW-3-PA-CL
							</Text>
							<List w={356} c={"#555459"} fz={12} fw={400} ml={37}>
								<List.Item>
									Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire
									Star
								</List.Item>
								<List.Item>
									3 Wire Close or Open Delta Configurations with Current Control/Current Limit and
									Over Load Protection.
								</List.Item>
							</List>
						</Stack>
						<Divider orientation="vertical" ml={64} my={38}></Divider>
						<Stack justify="flex-start" w={290}>
							<Text fz={10} c={"#828282"} fw={400} ml={64}>
								Prices are inclusive of Delivery Charges.
							</Text>
							<Text fz={24} fw={400} c={"#555459"} ml={64}>
								₹12,600 – ₹14,700
							</Text>

							<List ml={64}>
								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									In Stock
								</List.Item>

								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									<Text lineClamp={1}>
										Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards EMI{" "}
									</Text>
								</List.Item>

								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									<Text lineClamp={1}>Get 10% Instant Discount Up to ₹2250</Text>
								</List.Item>
							</List>
							<Stack>
								<OptionsButton ml={66} w={290}>
									Select Options
								</OptionsButton>
								<PrimaryButton ml={66} w={290}>
									ADD TO WISHLIST
								</PrimaryButton>
							</Stack>
						</Stack>
					</Group>
				</Card>
				<Card w={1212} h={384} bg={"#FFF"} top={39} ml={114} withBorder mt={40}>
					<Group>
						<Image src={Panel} w={284} h={284} ml={47} mt={49} />
						<Stack>
							<Text fz={18} fw={600} c={"#414141"} ml={37}>
								Three Phase Thyristor Power Controller
							</Text>
							<Text c={"#E83214"} ml={37} fz={14} fw={600}>
								POW-3-PA-CL
							</Text>
							<List w={356} c={"#555459"} fz={12} fw={400} ml={37}>
								<List.Item>
									Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire
									Star
								</List.Item>
								<List.Item>
									3 Wire Close or Open Delta Configurations with Current Control/Current Limit and
									Over Load Protection.
								</List.Item>
							</List>
						</Stack>
						<Divider orientation="vertical" ml={64} my={38}></Divider>
						<Stack justify="flex-start" w={290}>
							<Text fz={10} c={"#828282"} fw={400} ml={64}>
								Prices are inclusive of Delivery Charges.
							</Text>
							<Text fz={24} fw={400} c={"#555459"} ml={64}>
								₹12,600 – ₹14,700
							</Text>

							<List ml={64}>
								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									In Stock
								</List.Item>

								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									<Text lineClamp={1}>
										Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards EMI{" "}
									</Text>
								</List.Item>

								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									<Text lineClamp={1}>Get 10% Instant Discount Up to ₹2250</Text>
								</List.Item>
							</List>
							<Stack>
								<OptionsButton ml={66} w={290}>
									Select Options
								</OptionsButton>
								<PrimaryButton ml={66} w={290}>
									ADD TO WISHLIST
								</PrimaryButton>
							</Stack>
						</Stack>
					</Group>
				</Card>
				<Card w={1212} h={384} bg={"#FFF"} top={39} ml={114} withBorder mt={40}>
					<Group>
						<Image src={Panel} w={284} h={284} ml={47} mt={49} />
						<Stack>
							<Text fz={18} fw={600} c={"#414141"} ml={37}>
								Three Phase Thyristor Power Controller
							</Text>
							<Text c={"#E83214"} ml={37} fz={14} fw={600}>
								POW-3-PA-CL
							</Text>
							<List w={356} c={"#555459"} fz={12} fw={400} ml={37}>
								<List.Item>
									Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire
									Star
								</List.Item>
								<List.Item>
									3 Wire Close or Open Delta Configurations with Current Control/Current Limit and
									Over Load Protection.
								</List.Item>
							</List>
						</Stack>
						<Divider orientation="vertical" ml={64} my={38}></Divider>
						<Stack justify="flex-start" w={290}>
							<Text fz={10} c={"#828282"} fw={400} ml={64}>
								Prices are inclusive of Delivery Charges.
							</Text>
							<Text fz={24} fw={400} c={"#555459"} ml={64}>
								₹12,600 – ₹14,700
							</Text>

							<List ml={64}>
								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									In Stock
								</List.Item>

								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									<Text lineClamp={1}>
										Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards EMI{" "}
									</Text>
								</List.Item>

								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									<Text lineClamp={1}>Get 10% Instant Discount Up to ₹2250</Text>
								</List.Item>
							</List>
							<Stack>
								<OptionsButton ml={66} w={290}>
									Select Options
								</OptionsButton>
								<PrimaryButton ml={66} w={290}>
									ADD TO WISHLIST
								</PrimaryButton>
							</Stack>
						</Stack>
					</Group>
				</Card>
				<Pagination total={10} color="rgba(0, 0, 0, 1)" mt={68} ml={519} />
			</Paper>

			{/**MOBILE VIEW */}
			<Paper w={360} h={2850} hiddenFrom="xs" mt={2500} bg={"#f4f4f4"}>
				<Grid>
					<Grid.Col span={12}>
						<Image src={YellowMob} w={260} h={289} pos={"absolute"} ml={100} />

						<Image src={GlassManufacturing} w={328} h={241} pos={"absolute"} ml={16} mt={24} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={20} w={558} ml={16} fw={600} mt={313} c={"#292929"}>
							Thyristor Power Controller
						</Text>

						<Text w={321} c={"#555459"} fz={12} fw={400} ml={16} mt={16} lineClamp={4}>
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
							<Text fz={12} fw={400} ml={16} mt={12}>
								Read More
							</Text>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
				<Text fz={16} fw={600} c={"#292929"} ml={16} mt={24}>
					Sub Categories
				</Text>
				<Paper w={360} h={133} mt={16}>
					<Carousel
						ml={16}
						height={133}
						align="start"
						slideGap={0}
						controlsOffset="xs"
						withControls={false}
						slideSize="32%"
					>
						<Carousel.Slide>
							<Image src={subcatbg} w={80} h={80} pos={"absolute"} />
							<Image src={subcat1} w={48} h={48} pos={"absolute"} ml={16} mt={16} />
							<Text fz={10} mt={88} pos={"relative"}>
								Digital Indicator
							</Text>
						</Carousel.Slide>
						<Carousel.Slide>
							<Image src={subcatbg} w={80} h={80} pos={"absolute"} />
							<Image src={subcat2} w={48} h={48} pos={"absolute"} ml={16} mt={16} />
							<Text fz={10} mt={88} pos={"relative"}>
								Digital Indicator
							</Text>
						</Carousel.Slide>
						<Carousel.Slide>
							<Image src={subcatbg} w={80} h={80} pos={"absolute"} />
							<Image src={subcat3} w={48} h={48} pos={"absolute"} ml={16} mt={16} />
							<Text fz={10} mt={88} pos={"relative"}>
								Digital Indicator
							</Text>
						</Carousel.Slide>
						<Carousel.Slide>
							<Image src={subcatbg} w={80} h={80} pos={"absolute"} />
							<Image src={subcat1} w={48} h={48} pos={"absolute"} ml={16} mt={16} />
							<Text fz={10} mt={88} pos={"relative"}>
								Digital Indicator
							</Text>
						</Carousel.Slide>
						<Carousel.Slide>
							<Image src={subcatbg} w={80} h={80} pos={"absolute"} />
							<Image src={subcat2} w={48} h={48} pos={"absolute"} ml={16} mt={16} />
							<Text fz={10} mt={88} pos={"relative"}>
								Digital Indicator
							</Text>
						</Carousel.Slide>
						<Carousel.Slide>
							<Image src={subcatbg} w={80} h={80} pos={"absolute"} />
							<Image src={subcat3} w={48} h={48} pos={"absolute"} ml={16} mt={16} />
							<Text fz={10} mt={88} pos={"relative"}>
								Digital Indicator
							</Text>
						</Carousel.Slide>
					</Carousel>
				</Paper>
				<Paper w={360} h={650} hiddenFrom="xs" bg={"#f7f7f7"}>
					<Card withBorder h={650} w={327} ml={18} mt={32}>
						<Image src={Panel} w={131} h={166} ml={87} />
						<Text fz={16} c="#414141" mt={16} fw={600} ml={16}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Text fz={12} ml={16} mt={16} c={"#828282"}>
							Prices are inclusive of Delivery Charges.
						</Text>
						<Text ml={16} fz={20} fw={400} c="#414141">
							₹12,600 – ₹14,700
						</Text>
						<List w={296} c={"#555459"} fz={12} mt={14} fw={400} lh={"160%"}>
							<List.Item>
								Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire Star
							</List.Item>
							<List.Item>
								3 Wire Close or Open Delta Configurations with Current Control/Current Limit and
								Over Load Protection.
							</List.Item>
						</List>
						<Paper w={296} mt={38} withBorder h={56}>
							<Text fz={10} mt={8} ml={8} lineClamp={1} c={"#555459"}>
								{<IconCoin size={12} />} Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards
								EMI{" "}
							</Text>
							<UnstyledButton ml={27} fz={10}>
								View More
							</UnstyledButton>
						</Paper>
						<Stack gap="xs" align="stretch" mt={20}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
				</Paper>
				<Paper w={360} h={650} hiddenFrom="xs" bg={"#f7f7f7"}>
					<Card withBorder h={650} w={327} ml={18} mt={24}>
						<Image src={Panel} w={131} h={166} ml={87} />
						<Text fz={16} c="#414141" mt={16} fw={600} ml={16}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Text fz={12} ml={16} mt={16} c={"#828282"}>
							Prices are inclusive of Delivery Charges.
						</Text>
						<Text ml={16} fz={20} fw={400} c="#414141">
							₹12,600 – ₹14,700
						</Text>
						<List w={296} c={"#555459"} fz={12} mt={14} fw={400} lh={"160%"}>
							<List.Item>
								Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire Star
							</List.Item>
							<List.Item>
								3 Wire Close or Open Delta Configurations with Current Control/Current Limit and
								Over Load Protection.
							</List.Item>
						</List>
						<Paper w={296} mt={38} withBorder h={56}>
							<Text fz={10} mt={8} ml={8} lineClamp={1} c={"#555459"}>
								{<IconCoin size={12} />} Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards
								EMI{" "}
							</Text>
							<UnstyledButton ml={27} fz={10}>
								View More
							</UnstyledButton>
						</Paper>
						<Stack gap="xs" align="stretch" mt={20}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
				</Paper>
				<Paper w={360} h={864} hiddenFrom="xs" bg={"#f7f7f7"}>
					<Card withBorder h={650} w={327} ml={18} mt={24}>
						<Image src={Panel} w={131} h={166} ml={87} />
						<Text fz={16} c="#414141" mt={16} fw={600} ml={16}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Text fz={12} ml={16} mt={16} c={"#828282"}>
							Prices are inclusive of Delivery Charges.
						</Text>
						<Text ml={16} fz={20} fw={400} c="#414141">
							₹12,600 – ₹14,700
						</Text>
						<List w={296} c={"#555459"} fz={12} mt={14} fw={400} lh={"160%"}>
							<List.Item>
								Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire Star
							</List.Item>
							<List.Item>
								3 Wire Close or Open Delta Configurations with Current Control/Current Limit and
								Over Load Protection.
							</List.Item>
						</List>
						<Paper w={296} mt={38} withBorder h={56}>
							<Text fz={10} mt={8} ml={8} lineClamp={1} c={"#555459"}>
								{<IconCoin size={12} />} Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards
								EMI{" "}
							</Text>
							<UnstyledButton ml={27} fz={10}>
								View More
							</UnstyledButton>
						</Paper>
						<Stack gap="xs" align="stretch" mt={20}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
					<Pagination total={6} color="rgba(0, 0, 0, 1)" mt={50} ml={15} />
				</Paper>
			</Paper>

			{/**Tablet View */}
			<Paper w={768} h={4000} visibleFrom="xs" hiddenFrom="md">
				<Grid>
					<Grid.Col span={12}>
						<Image src={i} bg={"white"} w={475} h={554} pos={"absolute"} ml={293} />

						<Image
							src={GlassManufacturing}
							alt="Sample"
							w={588}
							h={433}
							pos={"absolute"}
							mt={61}
							ml={90}
						/>
					</Grid.Col>
					<Grid.Col span={12} mt={463}>
						<Text
							fz={32}
							fw={600}
							ml={90}
							mt={105}
							style={{ lineHeight: "51.2px", color: "#292929" }}
						>
							Thyristor Power Controller
						</Text>

						<Text
							h={331}
							w={588}
							style={{ color: "#555459" }}
							fz={14}
							fw={400}
							mb={40}
							mt={32}
							ml={90}
						>
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
					</Grid.Col>
				</Grid>
				<Paper h={119} w={768} withBorder>
					<Carousel
						ml={41}
						align="start"
						slideGap={0}
						controlsOffset="xs"
						withControls
						slideSize="50%"
					>
						<Carousel.Slide ml={90} mt={31}>
							<Group>
								<Image src={ipaD} w={48} h={57} ml={90} />
								<Text fz={10}>Digital Indicator</Text>
							</Group>
						</Carousel.Slide>
						<Carousel.Slide ml={37} mt={31}>
							<Group>
								<Image src={ipaD} w={48} h={57} />
								<Text fz={10}>Digital Indicator</Text>
							</Group>
						</Carousel.Slide>
						<Carousel.Slide ml={37} mt={31}>
							<Group>
								<Image src={ipaD} w={48} h={57} />
								<Text fz={10}>Digital Indicator</Text>
							</Group>
						</Carousel.Slide>
						<Carousel.Slide ml={37} mt={31}>
							<Group>
								<Image src={ipaD} w={48} h={57} />
								<Text fz={10}>Digital Indicator</Text>
							</Group>
						</Carousel.Slide>
						<Carousel.Slide ml={37} mt={31}>
							<Group>
								<Image src={ipaD} w={48} h={57} />
								<Text fz={10}>Digital Indicator</Text>
							</Group>
						</Carousel.Slide>
					</Carousel>
				</Paper>
			</Paper>
		</>
	);
};

export default ProductsList;

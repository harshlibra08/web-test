import {
	Card,
	Text,
	Image,
	Group,
	UnstyledButton,
	Paper,
	Divider,
	SimpleGrid,
	Button,
} from "@mantine/core";
import React from "react";
import Panel from "../Assets/panel.png";

const Products = () => {
	return (
		<>
			<Group wrap="nowrap" gap={0} mt={{ lg: 73 }}>
				<Text
					fw={600}
					fz={{ base: 20, lg: 32, sm: 32 }}
					ml={{ base: 16, lg: 114, sm: 144 }}
					c={"#262728"}
				>
					Our Products
				</Text>
				<Divider size="sm" w={{ lg: 904 }} ml={{ lg: 16 }} visibleFrom="md" />
				<Divider size="sm" w={455} ml={15} visibleFrom="xs" hiddenFrom="md" />

				{
					<UnstyledButton visibleFrom="md" ml={32}>
						View All
					</UnstyledButton>
				}
				{
					<UnstyledButton visibleFrom="xs" hiddenFrom="md" ml={15}>
						View All
					</UnstyledButton>
				}
			</Group>

			<Paper w={{ base: 360, lg: 1400, sm: 1024 }}>
				<SimpleGrid
					cols={{ base: 2, xl: 4, sm: 2 }}
					mt={{ lg: 30, base: 24, sm: 30 }}
					ml={{ lg: 114, base: 16, sm: 144 }}
					maw={{ sm: 735, lg: 1440 }}
				>
					{Array.from({ length: 4 }, (_, index) => index).map((i) => {
						return (
							// <Grid.Col key={i} span={{ base: 6, xl: 3 }}>
							<Card
								withBorder
								w={{ lg: 288, base: 156, sm: 358 }}
								h={{ lg: 364, base: 212, sm: 364 }}
							>
								<Text
									fz={{ lg: 14, base: 10, sm: 16 }}
									fw={600}
									c={"#555459"}
									w={{ sm: 326, lg: 260 }}
									ml={{ sm: 16 }}
								>
									Three Phase Thyristor Power Controller – POW-3-PA
								</Text>

								<Image
									src={Panel}
									w={{ base: 73, lg: 137, sm: 137 }}
									h={{ lg: 173, base: 91, sm: 173 }}
									mx="auto"
									mt={{ lg: 33, base: 15, sm: 24 }}
								/>

								<Text
									ta="center"
									c={"#414141"}
									mt={{ lg: 30, base: 15, sm: 24 }}
									fz={{ base: 12, lg: 20, sm: 20 }}
								>
									₹12,600 – ₹14,700
								</Text>
							</Card>
							// </Grid.Col>
						);
					})}
				</SimpleGrid>
				<Button variant="outline" color="#555459" w={176} ml={92} mt={40} hiddenFrom="xs">
					View All
				</Button>
			</Paper>
			{/* <Grid  mt={30} align="flex-start">
				<Grid.Col span={{ base: 12, xs: 6, md: 3 }}>
					<Card withBorder h={{ xs: 212, md: 364 }} maw={"9.75rem"}>
						<Card.Section>
							<Text fz={14} fw={600} c={"#555459"} w={260} mt={24.66} ml={12.57}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Image src={Panel} w={137} h={173} ml={75} mt={33} />
						</Card.Section>

						<Text px={59} c={"#414141"} mt={30}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6, md: 3 }}>
					<Card withBorder h={{ xs: 212, md: 364 }} w={{ xs: 156, md: 284 }}>
						<Card.Section>
							<Text fz={14} fw={600} c={"#555459"} w={260} mt={24.66} ml={12.57}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Image src={Panel} w={137} h={173} ml={75} mt={33} />
						</Card.Section>

						<Text px={59} c={"#414141"} mt={30}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6, md: 3 }}>
					<Card withBorder h={{ xs: 212, md: 364 }} w={{ xs: 156, md: 284 }}>
						<Card.Section>
							<Text fz={14} fw={600} c={"#555459"} w={260} mt={24.66} ml={12.57}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Image src={Panel} w={137} h={173} ml={75} mt={33} />
						</Card.Section>

						<Text px={"3.6rem"} c={"#414141"} mt={30}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6, md: 3 }}>
					<Card withBorder h={{ xs: 212, md: 364 }} w={{ xs: 156, md: 284 }}>
						<Card.Section>
							<Text fz={14} fw={600} c={"#555459"} w={260} mt={24.66} ml={12.57}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Image src={Panel} w={137} h={173} ml={75} mt={33} />
						</Card.Section>

						<Text px={59} c={"#414141"} mt={30}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
			</Grid> */}

			{/* Mobile view */}
			{/* <Group wrap="nowrap" gap={0} hiddenFrom="xs">
				<Box w={360}>
					<Text fw={600} fz={20} ml={16} style={{ color: "#262728", lineHeight: "40px" }}>
						Our Products
					</Text>
				</Box>

			</Group>
			<Grid maw={360} px={16} pb={56} mt={24} hiddenFrom="xs" justify="center" align="flex-start">
				<Grid.Col span={6}>
					<Card withBorder h={212} w={156}>
						<Card.Section>
							<Text fz={12} fw={600} c={"#555459"} w={135} mt={12} ml={8}>
								Three Phase Thyristor Power Controller – POW-3-PAA
							</Text>
							<Image src={Panel} w={73} h={91} ml={42} mt={10} />
						</Card.Section>

						<Text c={"#414141"} fz={12} mt={18} ta={"center"}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col span={6}>
					<Card withBorder h={212} w={156}>
						<Card.Section>
							<Text fz={12} fw={600} c={"#555459"} w={135} mt={12} ml={8}>
								Three Phase Thyristor Power Controller – POW-3-PAB
							</Text>
							<Image src={Panel} w={73} h={91} ml={42} mt={10} />
						</Card.Section>

						<Text c={"#414141"} fz={12} mt={18} ta={"center"}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col span={6}>
					<Card withBorder h={212} w={156} mt={32}>
						<Card.Section>
							<Text fz={12} fw={600} c={"#555459"} w={135} mt={12} ml={8}>
								Three Phase Thyristor Power Controller – POW-3-PAC
							</Text>
							<Image src={Panel} w={73} h={91} ml={42} mt={10} />
						</Card.Section>

						<Text c={"#414141"} fz={12} mt={18} ta={"center"}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col span={6}>
					<Card withBorder h={212} w={156} mt={32}>
						<Card.Section>
							<Text fz={12} fw={600} c={"#555459"} w={135} mt={12} ml={8}>
								Three Phase Thyristor Power Controller – POW-3-PAD
							</Text>
							<Image src={Panel} w={73} h={91} ml={42} mt={10} />
						</Card.Section>

						<Text c={"#414141"} fz={12} mt={18} ta={"center"}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Button variant="outline" color="#555459" w={176} mt={40}>
					View All
				</Button>
			</Grid> */}

			{/**Tablet View */}
			{/* <Paper w={768}>
				<Group wrap="nowrap" gap={0} w={768} hiddenFrom="md" visibleFrom="xs" ml={90}>
					<Text fz={26} fw={600} c={"#262728"} w={190}>
						Our Product
					</Text>
					<Divider orientation="horizontal" size={"sm"} w={302} ml={15} />

					{<UnstyledButton ml={21}>View All</UnstyledButton>}
				</Group>
				<Grid w={592} mt={24} hiddenFrom="md" visibleFrom="xs" ml={90}>
					<Grid.Col span={6}>
						<Card withBorder h={364} w={284}>
							<Card.Section>
								<Text fz={14} fw={600} c={"#555459"} w={261} mt={24} ml={16}>
									Three Phase Thyristor Power Controller – POW-3-PAA
								</Text>
								<Image src={Panel} w={137} h={173} ml={75} mt={35} />
							</Card.Section>

							<Text c={"#414141"} fz={20} mt={30} ta={"center"}>
								₹12,600 – ₹14,700
							</Text>
						</Card>
					</Grid.Col>
					<Grid.Col span={6}>
						<Card withBorder h={364} w={284}>
							<Card.Section>
								<Text fz={14} fw={600} c={"#555459"} w={261} mt={24} ml={16}>
									Three Phase Thyristor Power Controller – POW-3-PAA
								</Text>
								<Image src={Panel} w={137} h={173} ml={75} mt={35} />
							</Card.Section>

							<Text c={"#414141"} fz={20} mt={30} ta={"center"}>
								₹12,600 – ₹14,700
							</Text>
						</Card>
					</Grid.Col>
					<Grid.Col span={6}>
						<Card withBorder h={364} w={284}>
							<Card.Section>
								<Text fz={14} fw={600} c={"#555459"} w={261} mt={24} ml={16}>
									Three Phase Thyristor Power Controller – POW-3-PAA
								</Text>
								<Image src={Panel} w={137} h={173} ml={75} mt={35} />
							</Card.Section>

							<Text c={"#414141"} fz={20} mt={30} ta={"center"}>
								₹12,600 – ₹14,700
							</Text>
						</Card>
					</Grid.Col>
					<Grid.Col span={6}>
						<Card withBorder h={364} w={284}>
							<Card.Section>
								<Text fz={14} fw={600} c={"#555459"} w={261} mt={24} ml={16}>
									Three Phase Thyristor Power Controller – POW-3-PAA
								</Text>
								<Image src={Panel} w={137} h={173} ml={75} mt={35} />
							</Card.Section>

							<Text c={"#414141"} fz={20} mt={30} ta={"center"}>
								₹12,600 – ₹14,700
							</Text>
						</Card>
					</Grid.Col>
				</Grid>
			</Paper> */}
		</>
	);
};

export default Products;

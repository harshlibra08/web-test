import { Paper, Grid, Text, Image, Card, SimpleGrid } from "@mantine/core";
import React from "react";
import Panel from "./Assets/panel.png";
type Props = {};

const CategoryGrid = (props: Props) => {
	return (
		<>
			{/**Website  */}
			<Paper w={{ base: 360, lg: 1440 }} h={{ base: 483, lg: 507 }}>
				<Text ml={{ base: 16, lg: 114 }} fz={{ base: 16, lg: 24 }} fw={600} c={"#292929"}>
					Categories
				</Text>

				{/* <Grid ml={{ base: 16, lg: 114 }} columns={8}>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 3, lg: 1 }} mt={{ base: 48 }}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
				</Grid> */}

				<SimpleGrid
					cols={{ lg: 8, base: 8 }}
					ml={{ base: 16, lg: 114 }}
					spacing={{ base: 150 }}
					verticalSpacing={40}
					mt={24}
				>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
					<div>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</div>
				</SimpleGrid>
			</Paper>

			{/**Mobile */}
			{/* <Paper w={360} h={500} hiddenFrom="xs">
				<Text ml={16} fz={24} fw={600} c={"#292929"}>
					Categories
				</Text>
				<Grid columns={4} ml={16}>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
				</Grid>
			</Paper> */}

			{/**Tablet */}
			{/* <Paper w={768} h={400} visibleFrom="xs" hiddenFrom="md">
				<Text ml={114} fz={24} fw={600} c={"#292929"} mt={89}>
					Categories
				</Text>
				<Grid columns={4} ml={111}>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
					<Grid.Col span={1} mt={{base:48}}>
						<Card w={70} h={70} bg={"#f7f7f7"}>
							<Image src={Panel} />
						</Card>
						<Text fz={10} fw={600} c={"#555459"} w={55} ta={"center"} mt={8}>
							Digital Indicator
						</Text>
					</Grid.Col>
				</Grid>
			</Paper> */}
		</>
	);
};

export default CategoryGrid;

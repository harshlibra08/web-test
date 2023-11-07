import { Grid, Text, Image, UnstyledButton, Paper } from "@mantine/core";
import React from "react";
import PRC from "./Assets/prc.png";
type Props = {};

const OurProcess = (props: Props) => {
	return (
		<>
			{/* <Paper m="auto" w={{ base: 360, sm: 768, xl: 1400 }} mt={30}>
				<Grid>
					<Grid.Col span={{ base: 12, sm: 6, xl: 6 }} order={{ base: 2, sm: 1, lg: 1 }}>
						<Text fz={{ base: 20 }} fw={600} mt={{ base: 24 }} ml={{ base: 16 }}>
							The Global Impacts
						</Text>
						<Text fz={{ base: 12 }} fw={600} ml={{ base: 21 }} h={44} mt={16} w={298} c={"#555459"}>
							The products we’ve manufactured have been used over
						</Text>
						<Text fz={{ base: 32 }} fw={700} ml={{ base: 39 }} c={"#555459"} w={306} mt={4}>
							100 million
						</Text>

						<Text fz={{ base: 12 }} fw={600} ml={{ base: 39 }} c={"#555459"}>
							users & has been exported
						</Text>

						<Text fz={{ base: 32 }} fw={700} ml={{ base: 85 }} c={"#555459"}>
							8 countries
						</Text>

						<Text fz={{ base: 12 }} fw={600} ml={{ base: 85 }} w={81} c={"#555459"}>
							worldwide
						</Text>
					</Grid.Col>
					<Grid.Col span={3} order={{ base: 1, sm: 2, lg: 2 }}>
						<Image src={PRC} w={{ base: 360 }} h={{ base: 412 }} mt={{ base: 32 }} alt="World" />
					</Grid.Col>
				</Grid>
			</Paper> */}
			<Grid justify="flex-start" mt={50}>
				<Grid.Col span={{ base: 12 }}>
					<Image src={PRC} alt="prc" w={{ base: 360 }} h={{ base: 412 }} left={0} />
				</Grid.Col>

				<Grid.Col span={{ base: 12 }}>
					<Text
						fz={{ base: 20 }}
						w={374}
						fw={600}
						ml={{ base: 16 }}
						mt={{ base: 32 }}
						style={{ lineHeight: "51.2px" }}
					>
						Our Process
					</Text>
					<Text
						w={{ base: 328 }}
						ml={{ base: 16 }}
						c={"#555459"}
						mt={{ base: 16 }}
						fz={{ base: 12 }}
						fw={"bold"}
					>
						Our systems and instruments are developed and designed by a team of skilled engineers,
						who hold expertise in their respective field. We offer our clients with modernized
						development and design services for both software and hardware.
					</Text>
					<br />

					<Text w={{ base: 328 }} ml={{ base: 16 }} c={"#555459"} fz={{ base: 12 }} fw={400}>
						Our extensive range of products is closely inspected by industrial experts on stringent
						quality parameters to ensure its smooth functioning, durability, reliability, sturdy
						construction and long service life. We are currently supported by 1,50,000 instruments,
						enabling us with an outstanding range of output.
					</Text>

					<UnstyledButton pt={64} visibleFrom="md">
						<Text fz={20} fw={"bold"}>
							Know More
						</Text>
					</UnstyledButton>
				</Grid.Col>
			</Grid>

			{/**Mobile View */}
			{/* <Grid justify="flex-start" hiddenFrom="xs">
				<Grid.Col span={12}>
					<Image src={PRC} alt="prc" w={360} h={412} />
				</Grid.Col>

				<Grid.Col span={12}>
					<Text fz={20} ml={16} mt={32} fw={600} lh={"51.2px"}>
						Our Process
					</Text>
					<Text w={328} c={"#555459"} fz={12} fw={700} ml={16} mt={16}>
						Our systems and instruments are developed and designed by a team of skilled engineers,
						who hold expertise in their respective field. We offer our clients with modernized
						development and design services for both software and hardware.
					</Text>
					<br />

					<Text w={328} c={"#555459"} fz={12} fw={400} ml={16}>
						Our extensive range of products is closely inspected by industrial experts on stringent
						quality parameters to ensure its smooth functioning, durability, reliability, sturdy
						construction and long service life. We are currently supported by 1,50,000 instruments,
						enabling us with an outstanding range of output.
					</Text>
				</Grid.Col>
			</Grid> */}

			{/**Tablet View */}
			{/* <Grid justify="flex-start" hiddenFrom="md" visibleFrom="xs">
				<Grid.Col span={6}>
					<Image src={PRC} alt="prc" w={360} h={412} />
				</Grid.Col>

				<Grid.Col span={6}>
					<Text fz={20} ml={16} mt={32} fw={600} lh={"51.2px"}>
						Our Process
					</Text>
					<Text w={328} c={"#555459"} fz={12} fw={700} ml={16} mt={16}>
						Our systems and instruments are developed and designed by a team of skilled engineers,
						who hold expertise in their respective field. We offer our clients with modernized
						development and design services for both software and hardware.
					</Text>
					<br />

					<Text w={328} c={"#555459"} fz={12} fw={400} ml={16}>
						Our extensive range of products is closely inspected by industrial experts on stringent
						quality parameters to ensure its smooth functioning, durability, reliability, sturdy
						construction and long service life. We are currently supported by 1,50,000 instruments,
						enabling us with an outstanding range of output.
					</Text>
				</Grid.Col>
			</Grid> */}
		</>
	);
};

export default OurProcess;

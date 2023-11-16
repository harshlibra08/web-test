import { Grid, Text, Image, UnstyledButton, Paper } from "@mantine/core";
import React from "react";
import PRC from "./Assets/prc.png";
type Props = {};

const OurProcess = (props: Props) => {
	return (
		<>
			<Paper w={{ base: 360, lg: 1440 }}>
				<Grid>
					<Grid.Col span={{ base: 12, lg: 6 }}>
						<Image
							src={PRC}
							alt="prc"
							w={{ base: 360, lg: 607 }}
							h={{ base: 412, lg: 696 }}
							left={0}
						/>
					</Grid.Col>

					<Grid.Col span={{ base: 12, lg: 6 }}>
						<Text
							fz={{ base: 20, lg: 32 }}
							w={374}
							fw={600}
							ml={{ base: 16 }}
							mt={{ base: 32, lg: 167 }}
							style={{ lineHeight: "51.2px" }}
						>
							Our Process
						</Text>
						<Text
							w={{ base: 328, lg: 596 }}
							ml={{ base: 16 }}
							c={"#555459"}
							mt={{ base: 16, lg: 24 }}
							fz={{ base: 12 }}
							fw={"bold"}
						>
							Our systems and instruments are developed and designed by a team of skilled engineers,
							who hold expertise in their respective field. We offer our clients with modernized
							development and design services for both software and hardware.
						</Text>
						<br />

						<Text
							w={{ base: 328, lg: 596 }}
							ml={{ base: 16 }}
							c={"#555459"}
							fz={{ base: 12 }}
							fw={400}
						>
							Our extensive range of products is closely inspected by industrial experts on
							stringent quality parameters to ensure its smooth functioning, durability,
							reliability, sturdy construction and long service life. We are currently supported by
							1,50,000 instruments, enabling us with an outstanding range of output.
						</Text>

						<UnstyledButton pt={64} ml={16} visibleFrom="md">
							<Text fz={20} fw={"bold"}>
								Know More
							</Text>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
			</Paper>
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

import { Paper, Grid, Text, Image, UnstyledButton } from "@mantine/core";
import React from "react";
import PRC from "./Assets/prc.png";
type Props = {};

const OurProcess = (props: Props) => {
	return (
		<Paper w={1440} h={696}>
			<Grid>
				<Grid.Col span={6}>
					<Image src={PRC} alt="prc" w={607} h={696} left={0} pos="absolute" pl={0} ml={0} />
				</Grid.Col>

				<Grid.Col span={6}>
					<Text size="32px" w={374} h={102} fw={600} mt={123} style={{ lineHeight: "51.2px" }}>
						Our Process
					</Text>
					<Text w={502} style={{ color: "#555459" }} size="sm" fw={"bold"}>
						Our systems and instruments are developed and designed by a team of skilled engineers,
						who hold expertise in their respective field. We offer our clients with modernized
						development and design services for both software and hardware.
					</Text>
					<br />

					<Text w={502} style={{ color: "#555459" }} size="sm" fw={400}>
						Our extensive range of products is closely inspected by industrial experts on stringent
						quality parameters to ensure its smooth functioning, durability, reliability, sturdy
						construction and long service life. We are currently supported by 1,50,000 instruments,
						enabling us with an outstanding range of output.
					</Text>

					<UnstyledButton pt={64}>
						<Text fz={20} fw={"bold"}>
							Know More
						</Text>
					</UnstyledButton>
				</Grid.Col>
			</Grid>
		</Paper>
	);
};

export default OurProcess;

import { Paper, Container, Grid, Text, Image } from "@mantine/core";
import React from "react";
import PRC from "./Assets/prc.png";
import PRCBg from "./Assets/prcbg.png";
type Props = {};

const OurProcess = (props: Props) => {
	return (
		<Paper w={1440} h={696} withBorder>
			<Container>
				<Grid gutter="lg">
					<Grid.Col span={6}>
						<Paper pos={"initial"}>
							<Image
								src={PRC}
								alt="prc"
								width={607}
								height={696}
								left={0}
								pos="absolute"
								pl={0}
								ml={0}
							/>
							<Image
								src={PRCBg}
								alt="prc"
								width={607}
								height={696}
								left={0}
								pl={0}
								ml={0}
								pos="absolute"
							/>
						</Paper>
					</Grid.Col>

					<Grid.Col span={6}>
						<Text size="32px" w={374} h={102} fw={600} mt={123} style={{ lineHeight: "51.2px" }}>
							Our Process
						</Text>
						<Text h={44} w={592} color="#555459" size="sm" fw={400}>
							Our systems and instruments are developed and designed by a team of skilled engineers,
							who hold expertise in their respective field. We offer our clients with modernized
							development and design services for both software and hardware.
							<br />
							<br />
							<br />
							Our extensive range of products is closely inspected by industrial experts on
							stringent quality parameters to ensure its smooth functioning, durability,
							reliability, sturdy construction and long service life. We are currently supported by
							1,50,000 instruments, enabling us with an outstanding range of output.
						</Text>
					</Grid.Col>
				</Grid>
			</Container>
		</Paper>
	);
};

export default OurProcess;

import { Paper, Container, Grid, Text, Image } from "@mantine/core";
import React from "react";
import RectangleGrey from "./Assets/Rectangle3683.png";
import BrandImg from "./Assets/brand.png";
type Props = {};

const OurBrand = (props: Props) => {
	return (
		<>
			<Paper w={{ base: 360 }} h={{ base: 555 }} bg={"#000"} mt={{ base: 30 }}>
				<Grid>
					<Grid.Col span={{ base: 12 }}>
						<Image
							src={BrandImg}
							pos={"absolute"}
							left={0}
							ml={{ base: 17 }}
							mt={{ base: 24 }}
							w={{ base: 327 }}
							h={{ base: 241 }}
						/>
					</Grid.Col>

					<Grid.Col span={{ base: 12 }}>
						<Text
							fz={{ base: 20 }}
							w={374}
							fw={600}
							ml={{ base: 16 }}
							mt={{ base: 284 }}
							style={{ color: "#FFFFFF" }}
						>
							Our Brand
						</Text>
						<Text
							c={"#e4e8ed"}
							mt={24}
							fz={{ base: 12 }}
							fw={400}
							ml={{ base: 16 }}
							w={{ base: 328 }}
						>
							Launching a business isn't easy, which is why having a co-founder can often make
							things a little smoother, especially if that co-founder is your best friend. While
							many professionals warn against choosing a close friend as your business partner,
							there are plenty of examples that prove it can work. The best example is of Airbnb..
						</Text>
					</Grid.Col>
				</Grid>
			</Paper>

			{/**Mobile */}
			{/* <Paper w={360} h={696} bg={"black"} hiddenFrom="xs">
				<Grid ml={16}>
					<Grid.Col span={12}>
						<Image src={BrandImg} alt="Sample" w={327} h={242} mt={126} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={20} fw={600} c={"#f6f6f6"}>
							Our Brand
						</Text>
						<Text fz={12} fw={700} mt={16} c={"#e4e8ed"}>
							Our systems and instruments are developed and designed by a team of skilled engineers,
							who hold expertise in their respective field. We offer our clients with modernized
							development and design services for both software and hardware.
						</Text>
						<Text fz={12} fw={400} mt={16} c={"#e4e8ed"}>
							Our extensive range of products is closely inspected by industrial experts on
							stringent quality parameters to ensure its smooth functioning, durability,
							reliability, sturdy construction and long service life. We are currently supported by
							1,50,000 instruments, enabling us with an outstanding range of output.
						</Text>
					</Grid.Col>
				</Grid>
			</Paper> */}

			{/**Tablet */}
			{/* <Paper w={768} h={720} bg={"black"} visibleFrom="xs">
				<Grid ml={90}>
					<Grid.Col span={12}>
						<Image src={BrandImg} w={588} h={355} mt={40} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={32} fw={600} mt={30} c={"#f6f6f6"}>
							Our Brand
						</Text>
						<Text fz={14} fw={400} mt={24} w={588} c={"#e4e8ed"}>
							Our systems and instruments are developed and designed by a team of skilled engineers,
							who hold expertise in their respective field. We offer our clients with modernized
							development and design services for both software and hardware.
						</Text>
						<Text fz={14} fw={400} mt={24} w={588} c={"#e4e8ed"}>
							Our extensive range of products is closely inspected by industrial experts on
							stringent quality parameters to ensure its smooth functioning, durability,
							reliability, sturdy construction and long service life. We are currently supported by
							1,50,000 instruments, enabling us with an outstanding range of output.
						</Text>
					</Grid.Col>
				</Grid>
			</Paper> */}
		</>
	);
};

export default OurBrand;

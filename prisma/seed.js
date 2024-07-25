import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const data = [
			{ mkpt: "5887", name: "Ma Aye Nandar Aung" },
			{ mkpt: "6366", name: "Ma Hnin Hnin Ei" },
			{ mkpt: "6400", name: "Ma Yamin Ei" },
			{ mkpt: "6425", name: "Mg Kyaw Zin latt" },
			{ mkpt: "6651", name: "Ma Myo Thiri Kyaw" },
			{ mkpt: "6660", name: "Ma Thi Tar Htwe" },
			{ mkpt: "6686", name: "Ma Shoon Lae Ko" },
			{ mkpt: "6703", name: "Mg Hein Htet Lin" },
			{ mkpt: "6711", name: "Ma Khaing Thazin" },
			{ mkpt: "6725", name: "Ma Sandar Tin" },
			{ mkpt: "6750", name: "Ma Moe Myint Thaw" },
			{ mkpt: "6754", name: "Ma Kyi San Win" },
			{ mkpt: "6864", name: "Mg Nay Yair Linn" },
			{ mkpt: "6869", name: "Ma Hsu Cherry Linn" },
			{ mkpt: "6871", name: "Ma Su Myat Hnin" },
			{ mkpt: "6881", name: "Ma Hsu Myat Noe" },
			{ mkpt: "6883", name: "Ma Nay Chi Hlaing" },
			{ mkpt: "6892", name: "Mg Thi Ha Zaw" },
			{ mkpt: "6895", name: "Ma Hsu Hsu Htet" },
			{ mkpt: "6898", name: "Mg Toe Aung Myin"},
			{ mkpt: "6899", name: "Ma Nya Lay Phyu" },
			{ mkpt: "6914", name: "Ma Seng Moon Jar" },
			{ mkpt: "6922", name: "Ma Thawdar Win Hlaing" },
			{ mkpt: "6924", name: "Mg Ye Htet Hein" },
			{ mkpt: "6307", name: "Ma Hnin Ei San" },
			{ mkpt: "6354", name: "Ma May Thu Thu Soe" },
			{ mkpt: "6374", name: "Ma Hsu Lwin Lwin Toe" },
			{ mkpt: "6398", name: "Ma Hsu Latt Yadana Aung" },
			{ mkpt: "6735", name: "Ma Hnin Nu Lwin" }
		];

	data.forEach(async element => {
		await prisma.item.upsert({
				where: {mkpt: element.mkpt},
				update: element,
				create: element,
			})
		});
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
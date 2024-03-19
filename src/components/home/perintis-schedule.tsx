import Container from "../container";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { kedatangan, keberangkatan } from "@/data/perintis";

export default function PerintisSchedule() {
  return (
    <>
      <div className=" flex w-full py-20">
        <Container>
          <div className=" flex w-full justify-center">
            <div className=" flex w-[60%] flex-col justify-center">
              <div className=""></div>
              <h1 className=" text-3xl font-semibold text-center py-5">
                Jadwal Penerbangan Perintis
              </h1>
              <Tabs defaultValue="account">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Keberangkatan</TabsTrigger>
                  <TabsTrigger value="password">Kedatangan</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Table>
                    <TableCaption>
                      Perubahan Jadwal Akan Kami Informasikan Melalui Website &
                      Media Sosial Bandara Harun Thohir
                    </TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>No</TableHead>
                        <TableHead className="w-[100px]">Maskapai</TableHead>
                        <TableHead>Tanggal</TableHead>
                        <TableHead>Rute</TableHead>
                        <TableHead className="text-right">Waktu</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {keberangkatan.map((data) => (
                        <TableRow key={data.no}>
                          <TableCell>{data.no}</TableCell>
                          <TableCell className="font-medium">
                            {data.maskapai}
                          </TableCell>
                          <TableCell>{data.tanggal}</TableCell>
                          <TableCell>{data.rute}</TableCell>
                          <TableCell className="text-right">
                            {data.waktu}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="password">
                  <Table>
                    <TableCaption>
                      Perubahan Jadwal Akan Kami Informasikan Melalui Website &
                      Media Sosial Bandara Harun Thohir
                    </TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>No</TableHead>
                        <TableHead className="w-[100px]">Maskapai</TableHead>
                        <TableHead>Tanggal</TableHead>
                        <TableHead>Rute</TableHead>
                        <TableHead className="text-right">Waktu</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {kedatangan.map((data) => (
                        <TableRow key={data.no}>
                          <TableCell>{data.no}</TableCell>
                          <TableCell className="font-medium">
                            {data.maskapai}
                          </TableCell>
                          <TableCell>{data.tanggal}</TableCell>
                          <TableCell>{data.rute}</TableCell>
                          <TableCell className="text-right">
                            {data.waktu}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

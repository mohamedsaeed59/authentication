import React, { useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

const Invoice = () => {
    const invoiceRef = useRef(null);

    const handleDownloadPDF = async () => {
        if (invoiceRef.current) {
            const element = invoiceRef.current;
            
            const html2pdf = (await import('html2pdf.js')).default;

            html2pdf()
                .from(element)
                .set({
                    margin: 1,
                    filename: 'invoice.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                })
                .save();
        }
    };

    return (
        <>
        <Box className='invoice' ref={invoiceRef}>
            <Box className='container'>
                <Box className='header'>
                    <Box className='invoiceDetails'>
                        <Typography className='title'>Invoice</Typography>
                        <Typography><span style={{fontWeight: "700"}}>Date:</span> <span style={{opacity: "80%"}}>March 3, 2077</span> </Typography>
                        <Typography><span style={{fontWeight: "700"}}>Invoice:</span>  #117701</Typography>
                    </Box>
                    <Box>
                        <Typography className='logo'>Logoipsum</Typography>
                    </Box>
                </Box>
            </Box>

            <Box className='container'>
            <Box className='detailsSection'>
                <Box className='billTo'>
                    <Typography><span style={{opacity: "70%"}}>BILL TO</span></Typography>
                    <Typography><span style={{fontSize: "14px"}}>Your Client's Company</span></Typography>
                    <Typography><span style={{opacity: "80%"}}>Jakarta, Indonesia</span></Typography>
                    <Typography><span style={{opacity: "80%"}}>+62 21 123456</span></Typography>
                </Box>
                <Box className='payTo'>
                    <Typography><span style={{opacity: "70%"}}>PAY TO</span></Typography>
                    <Typography><span style={{fontSize: "14px"}}>Bima Agustian Wanaputra</span></Typography>
                    <Typography><span style={{opacity: "80%"}}>Jakarta, Indonesia</span></Typography>
                    <Typography><span style={{opacity: "80%"}}>+62 21 123456</span></Typography>
                </Box>
                </Box>
            </Box>

            <Box className='tableContainer'>    
              <Box className='container'>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Rate</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>UI Design Landing Page (1 Page)</td>
                            <td>Rp 500.000</td>
                            <td>1</td>
                            <td>Rp 500.000</td>
                        </tr>
                        <tr>
                            <td>UI Design Mobile Apps</td>
                            <td>Rp 5.000.000</td>
                            <td>1</td>
                            <td>Rp 5.000.000</td>
                        </tr>
                        <tr>
                            <td>Development Landing Page (1 Page)</td>
                            <td>Rp 1.000.000</td>
                            <td>1</td>
                            <td>Rp 1.000.000</td>
                        </tr>
                        <tr>
                            <td>Development Mobile Apps</td>
                            <td>Rp 10.000.000</td>
                            <td>1</td>
                            <td>Rp 10.000.000</td>
                        </tr>
                    </tbody>
                </table>
            </Box>
            </Box>

                <Box className='stamp'>
                <Box className='container'>
                    <Typography className='stamp1'>PAID 20%</Typography>
                    <Typography className='stamp2'>Rp 3.630.000</Typography>
                    <Typography className='stamp3'>04/03/2077</Typography>
                </Box>
                </Box>

                <Box className='additionalInfo'>
                <Box className='container'>
                    <Box className='infoHead'>
                        <Typography className='headContent'>Additional Information</Typography>
                        <Typography className='headContent'>Totals</Typography>
                    </Box>
                    <Box className='infoDetails'>
                        <Box className='totals'>
                            <Box>
                                <span className='left'>Institution: </span>
                                <span className='right'>Your Client’s Company</span>
                            </Box>
                            <Box>
                                <span className='left'>Period: </span>
                                <span className='right'>03/03/2077 – 03/06/2077</span>
                            </Box>
                            <Box>
                                <span className='left'>Terms: </span>
                                <span className='right'>20 Percent Upfront</span>
                            </Box>
                        </Box>
                        <Box className='totals'>
                            <Box>
                                <span className='left'>Subtotal: </span>
                                <span className='right'>Rp 16.500.000</span>
                            </Box>
                            <Box>
                                <span className='left'>Tax: </span>
                                <span className='right'>Rp 1.650.000</span>
                            </Box>
                            <Box>
                                <span className='left'>Total: </span>
                                <span className='right'>Rp 18.150.000</span>
                            </Box>
                        </Box>
                    </Box>                   
                    <Box className='infoFooter'>
                        <Typography className='footerContent'>Thank you! — bimaagustian@gmail.com</Typography>
                    </Box>
                 </Box>
                </Box>
        </Box>
        <Box className='container'>
        <Button onClick={handleDownloadPDF} className='downloadButton'>
            Download PDF
            <Image src="/iconDownload.svg" width={20} height={20} alt="Download Icon" className='downloadIcon' />
         </Button>
        </Box>
        </>
    );
};

export default Invoice;

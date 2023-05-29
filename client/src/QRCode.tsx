import { QRCodeSVG } from 'qrcode.react';

export const QRCode = ({ id }: { id: string }) => {
    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center">
            <QRCodeSVG style={{ height: '50%', width: '50%' }} value={id} />
        </div>
    );
};

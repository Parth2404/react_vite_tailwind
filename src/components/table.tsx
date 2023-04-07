import { EventData } from "../ethers/types";

type propsData = { headings: Array<string>; data: Array<EventData> };

const EventsTable = ({ headings, data }: propsData): JSX.Element => {
    return (
        <table className="table-auto border-solid border-2 border-white">
            <thead>
                <tr>
                    {headings.map((key: string) => (
                        <th key={key} className="px-4 py-2 border-solid border-2 border-white">
                            {key}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item: EventData, index: Number) => (
                    <tr key={Math.random()}>
                        <td key={Math.random()} className="border px-1 py-2">
                            {index.toString()}
                        </td>
                        <td key={Math.random()} className="border px-1 py-2">
                            {item.from}
                        </td>
                        <td key={Math.random()} className="border px-1 py-2">
                            {item.to}
                        </td>
                        <td key={Math.random()} className="border px-1 py-2">
                            {Number(item.value) / 1000000} <span className="text-1">USDT</span>
                        </td>
                        <td key={Math.random()} className="border px-1 py-2">
                            <a href={`https://etherscan.io/tx/${item.event.log.transactionHash}`}>
                                open
                            </a>
                        </td>
                        <td key={Math.random()} className="border px-1 py-2">
                            {item.event.eventName}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EventsTable;


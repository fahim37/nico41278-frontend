import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";

const pricingData = [
  {
    planName: "BASIC PLAN",
    addedDate: "5 Jun 2025",
    price: "$60",
    totalAccessEmails: "214",
    description:
      "Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe.",
    advantages: ["3 full subscription attempts", "Send 50 emails per day"],
  },
  {
    planName: "PREMIUM PLAN",
    addedDate: "5 Jun 2025",
    price: "$60",
    totalAccessEmails: "214",
    description:
      "Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe.",
    advantages: ["3 full subscription attempts", "Send 50 emails per day"],
  },
];

export function PricingTable() {
  return (
    <div className="rounded-lg shadow-sm">
      <div className="flex items-center justify-between p-6 rounded-lg bg-dashsecoundary">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-dashprimary rounded flex items-center justify-center">
            <span className="text-white text-sm">📋</span>
          </div>
          <h1 className="text-2xl text-dashprimary font-bold">Agency Lists</h1>
        </div>
        <Link href={"/dashboard/pricing/add-plan"}>
          {" "}
          <button className="bg-dashprimary w-[120px] py-2 rounded-lg text-white">
            Add +
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto bg-[#effdff] mt-5 rounded-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Plan Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Added Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Total Access Emails
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Advantages
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pricingData.map((plan, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {plan.planName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {plan.addedDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {plan.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {plan.totalAccessEmails}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                  {plan.description}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <ol className="list-decimal list-inside space-y-1">
                    {plan.advantages.map((advantage, i) => (
                      <li key={i}>{advantage}</li>
                    ))}
                  </ol>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

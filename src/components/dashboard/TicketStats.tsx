interface StatsProps {
    stats: {
      total: number;
      open: number;
      inProgress: number;
      resolved: number;
    }
  }
  
  export default function TicketStats({ stats }: StatsProps) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Tickets</h3>
          <p className="text-2xl font-semibold text-primary">{stats.total}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Open Tickets</h3>
          <p className="text-2xl font-semibold text-blue-500">{stats.open}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">In Progress</h3>
          <p className="text-2xl font-semibold text-orange-500">{stats.inProgress}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Resolved</h3>
          <p className="text-2xl font-semibold text-green-500">{stats.resolved}</p>
        </div>
      </div>
    )
  }
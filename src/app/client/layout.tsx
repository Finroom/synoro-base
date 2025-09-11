import Layout from "@/components/client/ClientLayout"

export default function CLientRootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Layout>
                <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
                    {children}
                </div>
            </Layout>
        </main>
    )
}
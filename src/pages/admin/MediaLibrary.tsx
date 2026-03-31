import AdminLayout from "@/components/admin/AdminLayout";

const sampleImages = [
  { name: "ai-enterprise.jpg", path: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop" },
  { name: "remote-work.jpg", path: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop" },
  { name: "sustainability.jpg", path: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400&h=400&fit=crop" },
  { name: "leadership.jpg", path: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop" },
  { name: "fintech.jpg", path: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop" },
  { name: "innovation.jpg", path: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop" },
  { name: "customer-experience.jpg", path: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&h=400&fit=crop" },
  { name: "startup-scaling.jpg", path: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop" },
];

const MediaLibrary = () => {
  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-serif text-3xl font-bold text-foreground">Media Library</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {sampleImages.map((file) => (
          <div key={file.name} className="group relative bg-card border border-border rounded-xl overflow-hidden">
            <img
              src={file.path}
              alt={file.name}
              className="w-full aspect-square object-cover"
            />
            <p className="text-[10px] text-muted-foreground truncate px-2 py-1">{file.name}</p>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default MediaLibrary;

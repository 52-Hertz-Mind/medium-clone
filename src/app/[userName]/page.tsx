interface ParamsInputView {
  userName: string;
}

export type ParamsInputPromise = { params: Promise<ParamsInputView> };

async function Page({ params }: ParamsInputPromise) {
  const { userName } = await params;
  console.log(userName);
  return (
    <div>
      <h1 className="text-8xl">{userName}</h1>
    </div>
  );
}

export default Page;
